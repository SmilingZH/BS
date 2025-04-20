/**
 * 图片信息数据文件
 * 此文件用于存储所有图片的基本信息，包括标题、朝代、作者等元数据
 * 
 * 维护说明：
 * 1. 每个图片对象包含以下属性：
 *    - id: 图片的唯一标识符（与图片文件名对应，如"0001"）
 *    - title: 图片标题
 *    - dynasty: 朝代
 *    - period: 具体年代
 *    - artist: 作者
 *    - content: 画作内容描述
 *    - technique: 绘画技法（可选）
 *    - dimensions: 尺寸（可选）
 *    - location: 收藏地点（可选）
 * 2. 添加新图片时，请在此文件中添加对应的信息对象
 * 3. 确保id与图片文件名一致，以便正确关联
 */

/**
 * 图片信息接口
 * 定义了图片信息对象的结构，包含必填和可选字段
 */
export interface ImageInfo {
  id: string;           // 图片ID，与文件名对应
  title: string;        // 图片标题
  dynasty: string;      // 朝代
  period: string;       // 具体年代
  artist: string;       // 作者
  content: string;      // 画作内容描述
  technique?: string;   // 绘画技法（可选）
  dimensions?: string;  // 尺寸（可选）
  location?: string;    // 收藏地点（可选）
}

/**
 * 图片信息数组
 * 包含所有图片的详细信息，按ID顺序排列
 * 数组索引从0开始，对应图片ID减1
 * 例如：imageInfoList[0] 对应 id="0001" 的图片
 */
export const imageInfoList: ImageInfo[] = [
  // 唐代画作
  {
    id: "0001",
    title: "梅花山茶雪雀图",
    dynasty: "唐",
    period: "8世纪末-9世纪初",
    artist: "边鸾",
    content: "画面描绘了梅花、山茶与雪雀的优美组合。边鸾运用精细的工笔重彩技法，准确捕捉了花鸟的形态特征和神韵，体现了唐代花鸟画独立成科后的艺术成就。",
    technique: "工笔重彩",
    dimensions: "纵30厘米，横25厘米",
    location: "故宫博物院"
  },
  {
    id: "0002",
    title: "梨花斑鸠图",
    dynasty: "唐",
    period: "8世纪末-9世纪初",
    artist: "边鸾",
    content: "此画采用独创的'折枝法'，仅描绘一枝梨花与栖息的斑鸠，构图简洁而富有自然天趣。画面线条流畅，色彩淡雅，充分体现了唐代花鸟画的审美特点和艺术成就。",
    technique: "工笔设色",
    dimensions: "纵28厘米，横22厘米",
    location: "上海博物馆"
  },
  {
    id: "0003",
    title: "猿马图",
    dynasty: "唐",
    period: "8世纪",
    artist: "韩干",
    content: "画面描绘了一位戴巾的奚官骑在白马背上，手持缰绳驾驭着一匹黑马。两匹马体态肥壮，神情悠然，线条勾勒简洁有力，色彩渲染细腻柔和，生动地表现出骏马的神骏和奚官的娴熟技艺。",
    technique: "工笔设色",
    dimensions: "纵30.8厘米，横34厘米",
    location: "台北故宫博物院"
  },
  
  // 宋代画作
  {
    id: "0004",
    title: "芙蓉锦鸡图",
    dynasty: "宋",
    period: "北宋",
    artist: "赵佶",
    content: "画面细致描绘了芙蓉花与锦鸡的优美组合，锦鸡羽毛色彩艳丽，形态逼真，花朵娇艳欲滴。整幅作品线条精细，色彩鲜明，充分展现了宋徽宗赵佶精湛的工笔花鸟画技艺。",
    technique: "工笔重彩",
    dimensions: "纵80.5厘米，横53.3厘米",
    location: "北京故宫博物院"
  },
  {
    id: "0005",
    title: "桃鸠图",
    dynasty: "宋",
    period: "北宋",
    artist: "赵佶",
    content: "此画描绘了盛开的桃花与栖息其上的斑鸠，构图简洁精妙。赵佶以精细的笔法刻画花鸟，色彩明艳却不失雅致，兼具形似与神似，展现了宋代皇家院体花鸟画的最高水平。",
    technique: "工笔设色",
    dimensions: "纵28.6厘米，横26.0厘米",
    location: "北京故宫博物院"
  },
  {
    id: "0006",
    title: "五色鹦鹉图",
    dynasty: "宋",
    period: "北宋",
    artist: "赵佶",
    content: "画面描绘了一只五色鹦鹉栖息在花枝上的场景。鹦鹉羽毛色彩绚丽，神态栩栩如生，花卉刻画精细入微。整幅作品技法精湛，色彩丰富，体现了宋徽宗高超的写生能力和艺术造诣。",
    technique: "工笔重彩",
    dimensions: "纵53.6厘米，横125.1厘米",
    location: "辽宁省博物馆"
  },
  
  // 元代画作
  {
    id: "0007",
    title: "八花图",
    dynasty: "元",
    period: "元中期",
    artist: "钱选",
    content: "此画集中描绘了梅、兰、竹、菊、山茶、牡丹、芍药、莲八种花卉，按四季排列组合而成。钱选运用纤细的线条勾勒花叶轮廓，淡雅的彩色晕染，绘制出花卉的神韵和风格。每种花卉都配有钱选亲笔题诗，使诗书画完美结合，充分体现了元代文人画'以书入画'和'平淡天真'的意境追求。",
    technique: "水墨淡彩",
    dimensions: "纵31.5厘米，横850厘米",
    location: "上海博物馆"
  },
  {
    id: "0008",
    title: "花鸟图卷",
    dynasty: "元",
    period: "元中期",
    artist: "钱选",
    content: "画面描绘了各种花卉与鸟类的优美组合。钱选以纤细流畅的线条勾勒物象轮廓，淡雅的水墨渲染层次，辅以点缀性的淡彩，营造出清新雅致的艺术效果。画面构图疏朗有致，意境悠远，既保留了宋代院体精细写生的特点，又融入了元代文人画简约空灵的审美理念，体现了钱选融汇宋元的独特艺术风格。",
    technique: "水墨淡彩",
    dimensions: "纵32.5厘米，横98.6厘米",
    location: "台北故宫博物院"
  },
  {
    id: "0009",
    title: "桃竹锦鸡图",
    dynasty: "元",
    period: "元晚期",
    artist: "王渊",
    content: "此画描绘了桃花、竹子与锦鸡的组合。王渊师法宋代工笔传统，但以水墨勾染取代设色，通过墨色浓淡的层次变化表现花鸟的质感与空间感，开启了'以墨代色'的新风，兼具工整与写意之美。",
    technique: "水墨",
    dimensions: "纵104.9厘米，横45.1厘米",
    location: "北京故宫博物院"
  },
  
  // 明代画作
  {
    id: "0010",
    title: "狮头鹅图",
    dynasty: "明",
    period: "明中期",
    artist: "吕纪",
    content: "此画生动描绘了一只头部如狮子般雄壮的白鹅。吕纪以精湛的工笔技法刻画鹅的羽毛和形态，线条流畅有力，色彩清新明丽，体现了明代院体花鸟画的写实传统和艺术成就。",
    technique: "工笔设色",
    dimensions: "纵127.5厘米，横58.2厘米",
    location: "北京故宫博物院"
  },
  {
    id: "0011",
    title: "桂菊山禽图",
    dynasty: "明",
    period: "明中期",
    artist: "吕纪",
    content: "画面描绘了桂花、菊花与山禽的自然组合。吕纪继承并发展了宋代院体花鸟画的精细写实传统，色彩艳丽，笔法精微，刻画入微，花叶禽鸟均形神兼备，富有生命力。",
    technique: "工笔重彩",
    dimensions: "纵176.1厘米，横97.1厘米",
    location: "台北故宫博物院"
  },
  {
    id: "0012",
    title: "竹鹤图",
    dynasty: "明",
    period: "明初",
    artist: "边景昭",
    content: "画面描绘了一只丹顶鹤立于翠竹旁的优美场景。边景昭以工整的线条勾勒竹与鹤的形态，设色清丽典雅，构图简洁而富有韵味，是明初宫廷画风的代表作品。",
    technique: "工笔设色",
    dimensions: "纵186.7厘米，横106.7厘米",
    location: "台北故宫博物院"
  },
  
  // 清代画作
  {
    id: "0013",
    title: "秋海棠图",
    dynasty: "清",
    period: "清初",
    artist: "恽寿平",
    content: "此画以'没骨法'描绘秋海棠，不用墨线勾勒，直接以水墨或淡彩点染，形成温润如玉的质感。恽寿平通过精妙的水法和色彩运用，呈现出秋海棠的清雅气质和生命活力，开创了'常州画派'的典雅风格。",
    technique: "没骨法",
    dimensions: "纵36.2厘米，横137.8厘米",
    location: "南京博物院"
  },
  {
    id: "0014",
    title: "九兰图",
    dynasty: "清",
    period: "清初",
    artist: "恽寿平",
    content: "画面描绘了九种不同品类的兰花，以恽寿平独创的'撞水撞色'技法表现兰花的优美姿态和清雅气质。整幅作品设色淡雅，笔法精微，兰叶挺拔，兰花清秀，充分体现了'南田画派'的艺术特色。",
    technique: "没骨淡彩",
    dimensions: "纵33.5厘米，横143.8厘米",
    location: "上海博物馆"
  },
  {
    id: "0015",
    title: "兰竹图",
    dynasty: "清",
    period: "清中期",
    artist: "郑燮",
    content: "此画描绘了兰花与竹子的组合，是郑板桥最具代表性的题材。他将书法用笔融入绘画，以刚劲有力的线条表现竹的挺拔和兰的清雅，构图简练，意境深远，体现了'六分半书'的独特艺术风格。",
    technique: "水墨写意",
    dimensions: "纵123.5厘米，横31.8厘米",
    location: "中国美术馆"
  }
];

/**
 * 根据图片ID获取图片信息
 * @param id 图片ID，如"0001"
 * @returns 对应的图片信息对象，如果未找到则返回undefined
 */
export function getImageInfoById(id: string): ImageInfo | undefined {
  return imageInfoList.find(info => info.id === id);
}

/**
 * 根据图片索引获取图片信息
 * @param index 图片在数组中的索引，从0开始
 * @returns 对应的图片信息对象，如果索引无效则返回undefined
 */
export function getImageInfoByIndex(index: number): ImageInfo | undefined {
  if (index >= 0 && index < imageInfoList.length) {
    return imageInfoList[index];
  }
  return undefined;
} 