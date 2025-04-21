/**
 * 图片资源管理文件
 * 本文件集中管理所有卷轴查看器使用的图片资源，便于统一导入和使用
 */

/**
 * 导入所有本地图片
 * 从imgs目录导入webp格式的图片
 * 这些图片将作为卷轴查看器的展示内容
 */
import image0001 from './imgs/梅花山茶雪雀图.webp';
import image0002 from './imgs/梨花斑鸠图.webp';
import image0003 from './imgs/猿马图.webp';
import image0004 from './imgs/芙蓉锦鸡图.webp';
import image0005 from './imgs/桃鸠图.webp';
import image0006 from './imgs/五色鹦鹉图.webp';
import image0007 from './imgs/八花图卷.webp';
import image0008 from './imgs/花鸟图卷.webp';
import image0009 from './imgs/桃竹锦鸡图轴.webp';
import image0010 from './imgs/狮头鹅图.webp';
import image0011 from './imgs/桂菊山禽图.webp';
import image0012 from './imgs/竹鹤图轴.webp';
import image0013 from './imgs/秋海棠图.webp';
import image0014 from './imgs/九兰图.webp';
import image0015 from './imgs/兰竹图.webp';

// 导入朝代绘画信息数据
import { dynastyPaintingInfoList } from './data/dynasty-painting-info';
// 导入图片信息数据
import { getImageInfoByIndex } from './data/image-info';

/**
 * 导出图片数组
 * 将所有图片按顺序组织成数组，方便通过索引访问
 * 数组索引从0开始，对应图片编号减1
 * 例如：scrollImages[0] 对应 image0001
 */
export const scrollImages = [
  image0001, image0002, image0003, image0004, image0005, 
  image0006, image0007, image0008, image0009, image0010,
  image0011, image0012, image0013, image0014, image0015
];

/**
 * 导出默认图片和替代图片
 * defaultImage: 默认显示的图片，当未指定图片时使用
 * alternateImage: 替代图片，当默认图片加载失败或需要切换风格时使用
 */
export const defaultImage = image0001;
export const alternateImage = image0007; // 选择一张与默认图片不同风格的图片作为备选 

/**
 * 图片与朝代绘画信息的映射关系
 * 将图片索引映射到朝代绘画信息中的代表作品
 */
const imageToMasterpieceMap: Record<number, {dynastyId: number, paintingIndex: number}> = {
  0: {dynastyId: 3, paintingIndex: 0}, // 梅花山茶雪雀图
  1: {dynastyId: 4, paintingIndex: 1}, // 梨花斑鸠图
  2: {dynastyId: 4, paintingIndex: 0}, // 猿马图
  3: {dynastyId: 2, paintingIndex: 0}, // 芙蓉锦鸡图
  4: {dynastyId: 4, paintingIndex: 4}, // 桃鸠图
  5: {dynastyId: 4, paintingIndex: 3}, // 五色鹦鹉图
  6: {dynastyId: 3, paintingIndex: 1}, // 八花图卷
  7: {dynastyId: 4, paintingIndex: 2}, // 花鸟图卷
  8: {dynastyId: 3, paintingIndex: 2}, // 桃竹锦鸡图轴
  9: {dynastyId: 2, paintingIndex: 1}, // 狮头鹅图
  10: {dynastyId: 1, paintingIndex: 0}, // 桂菊山禽图
  11: {dynastyId: 0, paintingIndex: 0}, // 竹鹤图轴
  12: {dynastyId: 5, paintingIndex: 0}, // 秋海棠图
  13: {dynastyId: 5, paintingIndex: 1}, // 九兰图
  14: {dynastyId: 5, paintingIndex: 2} // 兰竹图
};

/**
 * 获取图片元数据信息
 * @param index 图片索引
 * @returns 图片元数据对象
 */
export const getImageMetadata = (index: number) => {
  // 首先尝试从image-info.ts中获取信息
  const imageInfo = getImageInfoByIndex(index);
  
  if (imageInfo) {
    return {
      title: imageInfo.title,
      artist: imageInfo.artist,
      dynasty: imageInfo.dynasty,
      year: imageInfo.period,
      description: imageInfo.content,
      medium: imageInfo.technique || '未知',
      dimensions: imageInfo.dimensions || '未知',
      collection: imageInfo.location || '未知',
      significance: imageInfo.yiyi || '未知'
    };
  }
  
  // 如果在image-info.ts中没有找到对应信息，则尝试使用dynastyPaintingInfo中的信息
  if (index in imageToMasterpieceMap) {
    const { dynastyId, paintingIndex } = imageToMasterpieceMap[index];
    const dynasty = dynastyPaintingInfoList[dynastyId];
    
    if (dynasty && dynasty.masterpieces.length > paintingIndex) {
      const masterpiece = dynasty.masterpieces[paintingIndex];
      return {
        title: masterpiece.title,
        artist: masterpiece.artist,
        dynasty: dynasty.name,
        year: masterpiece.time,
        description: masterpiece.description + (masterpiece.story ? ` ${masterpiece.story}` : ''),
        medium: '未知', // 朝代绘画信息中没有对应的medium属性
        dimensions: '未知', // 朝代绘画信息中没有对应的dimensions属性
        collection: masterpiece.location || '未知',
        significance: masterpiece.significance
      };
    }
  }
  
  // 兜底方案，当上述两种方式都找不到信息时
  return {
    title: '未知作品',
    artist: '佚名',
    dynasty: '未知',
    year: '未知',
    description: '暂无描述',
    medium: '未知',
    dimensions: '未知',
    collection: '未知',
    significance: '暂无艺术价值和历史意义的相关信息'
  };
}; 