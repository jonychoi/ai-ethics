import React from 'react';
import {Flex, Col, Row, Text, Image, Link} from './components/common/base';
import { unlimitColor } from './styles';
import as2_1 from './imgs/0315-1.png';
import as2_2 from './imgs/0315-2.png';
import as2_3 from './imgs/0315-3.png';
import as3_1 from './imgs/0331-1.png';
import as3_2 from './imgs/0331-2.png';
import as3_3 from './imgs/0331-3.png';


export const contents = [
    {
        title: "",
        description: 
            <Col align="center" justify="center" style={{alignSelf: "center", width: '100%', height: '100%'}}>
                <Image style={{width: 100, objectFit: 'contain'}} src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Korea_University_Global_Symbol.svg/1200px-Korea_University_Global_Symbol.svg.png"  />
                <Text size="35" weight="700" margin="margin: 15px;" style={{fontFamily: 'Cormorant Garamond'}}>Ethics of Artificial Intelligence</Text>
                <Text size="22" style={{fontStyle: "italic", fontFamily: 'Cormorant Garamond'}}>Prof. Hyunchul Kim</Text>
            </Col>
        ,
    },
    {
        title: "",
        description: 
            <Col align="center" justify="center" style={{alignSelf: "center", width: '100%', height: '100%'}}>
                <Text size="18" style={{fontStyle: "italic", textAlign: "center"}} margin="margin: 20px;" lh="40">"이 노트를 김현철 교수님과 학우들께 바칩니다.</Text>
                <Text size="18" style={{fontStyle: "italic", textAlign: "center"}} lh="40">한 학기 동안 김현철 교수님의 인공지능과윤리 수업을 정리하고, 또 제가 제출한 과제를 바탕으로 정리한 웹노트입니다. <br></br> 미약하지만, 추후에 공부할 후배들과 인공지능응용전공 학우들에게 많은 도움이 됬으면 좋겠습니다."</Text>
                <Text size="18" style={{opacity: 0.8}} lh="40" margin="margin-top: 20px;">Written by 최수형, 2018390740</Text>
                <Text size="18" style={{opacity: 0.8}} margin="margin-top: 5px;">Github: <Link target="_blank" href="https://www.github.com/jonychoi/ai-ethics">ai-ethics</Link><Link target="_blank" style={{marginLeft: 10}} href="https://www.github.com/jonychoi">@jonychoi</Link></Text>
            </Col>
    },
    {
        title: "Introduction to Ethics of Artificial Intelligence",
        //description: "많은 부분에 ai 침투, ai 개발하면서 vision lab에서 일하고 있음으로써 여러 관점에서 윤리적인 측면을 파악하고자함. 내용은 수업 내용을 기반으로 더 조사하여 보강하여 "
        // 본수업에서는 A.I의 창발과 그 발전사를 통해 A.I의 연구 개발 현황부터 최신 이슈까지 폭넓게 다뤘으며, 이로부터 발생할 수 있는 다양한 ai ehitcal issue들을 논리적으로 분석하고, 여러 학생들의 의견까지 들어보았다. 
        //읽기 좋은 형태로 만든것임. 해당 컨텐츠는 다음과 같이 4챕터로 이루어져있음 1. What is A.I? The Fundamental of A.I and its Ethics. 2. The Logical Analysis of Ethics of A.I 3. Ethical Issues in practical, My philosihpy: 과제"
        description: 
        <Col align="flex-start" justify="flex-start">
            <Text size="18" style={{fontStyle: "italic", textAlign: "center"}} lh="40">한 학기 동안 김현철 교수님의 인공지능과윤리 수업을 정리하고, 또 제가 제출한 과제를 바탕으로 정리한 웹노트입니다. <br></br> 미약하지만, 추후에 공부할 후배들과 인공지능응용전공 학우들에게 많은 도움이 됬으면 좋겠습니다."</Text>
        </Col>
    },
    {
        title: "About the A.I Ethics",
        description: "A.I Ethics, 일상생활에서 이미 많은 부분에 ai usage",
        date: "March 3"  
    },
    {
        title: "What is A.I?, 4 issues about Ethics of A.I, 4 area of ai",
        description: "definition of A.I, 신뢰성 편향성 책임성 악용가능성, ai의 4가지 영역 문제해결, 추론, 학습, 인식",
        date: "March 7"  
    },
    {
        title: "The bias of A.I",
        description: "bias of A.I",
        date: "March 10" 
    },
    {
        title: "The history of A.I. And about the state of the arts ",
        description: "1. 역사 (겨울) 2. and let's brifely know about how the ai is different between other algorithms (Problem Solving, Reasoning, Learning, Regcognition지식 베이스 등등)/ super intelligence 까지",
        date: "March 15",
    },
    {
        title: "인간과 기계의 지능",
        // 16 - 44
        description: "",
        date: "March 17",
        part: "Stuart Russell - Human-Compatible",
        chap: "Chap 2. Intelligence in humans and machines",
    },
    {
        title: "인간과 기계의 지능",
        // 30 - 69
        description: "",
        date: "March 22",
        part: "Stuart Russell - Human-Compatible",
        chap: "Chap 2. Intelligence in humans and machines",
    },
    {
        title: "인간과 기계의 지능",
        // 69 - 95
        description: "",
        date: "March 29",
        part: "Stuart Russell - Human-Compatible",
        chap: "Chap 2. Intelligence in humans and machines",
    },
    {
        title: "앞으로 A.I는 어떻게 발전할까",
        // 95 - 150
        description: "",
        date: "March 31",
        part: "Stuart Russell - Human-Compatible",
        chap: "Chap 3. How might AI progress in the future?",
    },
    {
        title: "A.I의 오용",
        // 156 - 166
        description: "",
        date: "April 5",
        part: "Stuart Russell - Human-Compatible",
        chap: "Chap 4. Misuses of AI",
    },
    {
        title: "A.I의 오용",
        // 165 - 184
        description: "",
        date: "April 7",
        part: "Stuart Russell - Human-Compatible",
        chap: "Chap 4. Misuses of AI",
    },
    {
        title: "A.I의 오용, 지나치게 지적인 A.I",
        // 161 - 212
        description: "",
        date: "April 12",
        part: "Stuart Russell - Human-Compatible",
        chap: "Chap 4. Misuses of AI, Chap 5. Overly intelligent AI",
    },
    {
        title: "그저 그런 A.I 논쟁",
        // 196 - 250
        description: "",
        date: "April 14",
        part: "Stuart Russell - Human-Compatible",
        chap: "Chap 6. The not-so-great AI debate"
    },
    {
        title: "A.I: 다른 접근법",
        // 250 - 268
        description: "",
        date: "April 19",
        chap: "Chap 7. AI : a different approach",
    },
    {
        title: "인공지능의 신뢰성",
        // 0 - 43
        description: "",
        date: "April 26",
        part: "한상기 - 신뢰할 수 있는 인공지능",
        chap: "1장. 인공지능의 신뢰성"
    },
    {
        title: "인공지능의 신뢰성",
        // 0 - 59
        description: "",
        date: "April 28",
        part: "한상기 - 신뢰할 수 있는 인공지능",
        chap: "1장. 인공지능의 신뢰성"
    },
    {
        title: "인공지능의 공정성",
        // 60 - 87
        description: "",
        date: "May 3",
        part: "한상기 - 신뢰할 수 있는 인공지능",
        chap: "2장. 인공지능의 공정성"
    },
    {
        title: "인공지능의 공정성",
        // 89 - 103
        description: "",
        date: "May 10",
        part: "한상기 - 신뢰할 수 있는 인공지능",
        chap: "2장. 인공지능의 공정성"
    },
    {
        title: "발표",
        description: "",
        date: "May 12",
    },
    {
        title: "발표",
        description: "",
        date: "May 17",
    },
    {
        title: "인공지능의 윤리성",
        // 109 - 156
        description: "",
        date: "May 31",
        part: "한상기 - 신뢰할 수 있는 인공지능",
        chap: "인공지능의 윤리성"
    },
    {
        title: "인공지능의 윤리성",
        // 160 - 235
        description: "",
        date: "June 2",
        part: "한상기 - 신뢰할 수 있는 인공지능",
        chap: "인공지능의 윤리성"
    },
    {
        title: "Su Hyung Choi's Philoshopy",
        description: "과제"
    },
    {
        title: "March 8 Assignment",
        expansion: true,
        description: 
        <Col margin="margin-top: 20px;">
            <Text style={{margin: '0 20%'}} color={unlimitColor} lh="30" size="16.5">Q. 인간 면접관과 인공지능 면접관은 모두 비슷한 문제를 내포하고 있다고 볼 수 있다. 대표적인 것이 편향성의 문제인데, 왜 발생을 하고 어떻게 해결할 수 있을 것인지에 대해 인간면접관, 인공지능 면접관을 비교하여 설명하시오.</Text>
            
            <Text margin="margin: 20px 0;" lh="30">
                <p>‘편향성’이라는 문제에서 인간과 인공지능은 둘다 자유로울 수 없다. 이는 결국엔 특정한 논리에 의해서 작동하는 인간의 사고와 인공지능의 지능이 결코 어떠한 부분에서도 객관적일 수 없다는 면을 보여주는데, 이는 그렇다면 근본적으로 ‘결정’이라는 측면에서 과연 주관적이지 않은 것이 있냐는 철학적 문제로 귀결될 수 있다. </p>
                <p>인간면접관과 인공지능면접관의 판단은 결국 특정 ‘주체’에 의해 결정되거나, 지도된 ‘GUIDELINE’으로써 (인간의 경우엔 지침이나 규정 따위, 인공지능의 경우엔 해당 지능을 설계한 인간의 전문가적 관점 내지는 명시적 알고리즘) 결정을 내리던, 아니면 둘다 각각 ‘객체’의 학습에 기반하여 (인간의 경우, 상호간의 살아오거나, 학습으로부터 경험된 일련의 지식, 인공지능의 경우에는 지도, 또는 비지도 학습을 통해 데이터로부터의 일련의 ‘경험’) 결정을 내리던 결국엔 그 근반이되는 모든 ‘지식’이라는 정보는 ‘벡터성’, 즉 방향성을 지니고 있다. </p>
                <p>하지만, ‘보편적’이라는 관점에서 인간은 사회적인 상식이 존재하고, 내지는 문화적이고 범용적 인간으로써의 규범이 존재한다. 인공지능은 인간이 디자인하였고, 인간을 위한다는 가정을 전제로한다면, 인공지능의 규범과 ‘일반적인’ 도덕과 그 객관성은 인간의 객관성을 따르게 된다는 것이다.</p>
                <p>결국은 인간이 어떻게 사고하고, 판단하는지에 따라서 현재 수준의 인공지능의 도덕성과 객관성은 결정될 수 밖에 없다. 그것이 ‘비지도’이던, ‘지도’이던 결국엔 인공지능이 설계되는 과정 - 1. 특정한 인간의 지식이 EMBEDDING (전문가 시스템),  2. 데이터를 통한 학습 – 에는 근본적 바탕이 되는 정보장 (INFORMATION FIELD)이 존재하며, 이는 인간이 지금껏 쌓아왔던 ‘업’의 결과로 판단되고 경험되어진다고 생각해볼 수 있다.</p>
                <p>정리하자면, ‘인간’이라는 주체는, 행동하고 사고하는 주체이며, 유전적으로 내제된 판단력 – 이 또한 장시간의 걸쳐 진화로써 학습된 결과라라고 볼 수 있다. – 과 인생을 걸쳐 경험을 통해 학습한 판단력을 지니고 있는 존재이며, ‘인공지능’이라는 존재는 결국엔 이가 스스로 판단력을 갖춘 ‘주체’로써의 존재이던, 혹은 정해진 법칙에 의해 판단하던 ‘객체’로써의 존재이던, 인공지능의 판단력은 결국은 ‘인간’의 규범을 따를 수 밖에 없다는 것이다. – 특히 최근의 데이터로써 학습되는 기계학습 중점의 인공지능은 더더욱 그렇다.-. 때문에 인간의 편향성이 그대로 인공지능에게 답습되고, 이는 때로는 의도하지 않았지만 인간이 지금껏 쌓아온 정보장에서 편향되어 있는 정보에 기반하여 학습되어 인간보다 때때로 더더욱 편향적인 모습을 보이곤 한다.</p>
                <p>결국 다시 문제는 인간으로써 귀결된다. 우리는 인공지능을 통해 인간으로써의 우리의 존재를 다시 탐구해보아야 한다. 적어도 인공지능이라는 존재를 우리의 거울로 만들 것인지, 아니면 더 나은 존재 내지는 인간을 보조하며, 더 나은 결정을 내리게 하는 존재로 만들 수 있는지 조차 고민해 볼 필요가 있다.</p>
                <p>사실 기계적인 대답으로써 편향성의 극복은 인간면접관에게는 사회 보편적인 규범 교육 내지는 그러한 도덕성을 바탕으로한 원리, 원칙에 의한 판단, 그리고 인공지능 면접관에게는 올바른 데이터와 편향성을 가지지 않은 지도된 데이터 필드에서 OVERFITTING과 UNDERFITTING을 방지하고, 좀 더 GENERAL한 성능을 가진 인공지능을 설계하는 것이 되겠다. 하지만 나는 이것 이전에 근본적인 인간으로써의 존재와 이를 넘어서게 될 가능성이 존재하는 인공지능을 설계하는 핵심적 철학에 대해서 연구가 선행됨이 당연하다고 생각한다. 인간이 존엄하고, 고귀한 이유가 바로 그것이기 때문이지 않을까.</p>
            </Text>
        </Col>,
    },
    {
        title: "March 15 Assignment",
        expansion: true,
        description: 
        <Col margin="margin-top: 20px;">
            <Text style={{margin: '0 20%'}} color={unlimitColor} lh="30" size="16.5">Q. 포털 사이트의 뉴스 추천, SNS의 포스트 글 또는 친구 추천 등의 알고리즘의 사례 및 문제점을 조사하여 정리하시오.</Text>
            
            <Text margin="margin: 20px 0;" lh="30">
                <p>
                많은 기업들이 사용자를 그들의 platform에 양식하기 위해서 많은 알고리즘을 도입하고 있는데, 그 대표적인 알고리즘 중 상당수가 machine learning을 이용한 알고리즘이다. 해당 machine learning기법은 주로 recommender system을 위해서 급격하게 발달하였으며, 전통적인 machine learning algorithm인 clustering과 classification 등을 이용하여 많은 결과를 낳았다. 최근에는 Graph Neural Network, 즉 여러 데이터들을 하나의 거대한 data points, 즉 데이터들을 특정한 node로써 취급하여 상호간의 연결된 graph에서 연결성을 추출하는 algorithm등을 선보이고 있다. 
                </p>
                <p>
                Social Media는 분명 우리 삶에 지대한 영향을 미치고 있다. 나의 친구, 그 친구의 친구를 넘어서 전세계를 3다리만 건너면 알 수 있게 만들어버린 이 network에서 platform기업들이 가지는 영향력은 그야말로 국가를 초월하며, 그 규제 또한 애매모하고 쉽지 않다. 이러한 점들을 인식하였는지 2016년부터 미국 트럼프 대통령 당선을 계기로 흔히 말하는 ‘fake news’의 파급력에 대해서 전세계가 주목하였으며, 트럼프 대통령의 임기말인 2020년에는 미 국회난동사건으로 자국 대통령의 계정을 중지시켜버리는, 그야말로 절대권력을 지니고 있기도 하다.
                </p>
                <p>
                하지만 사람들은 이러한 Social Media의 영향력을 크게 간과하고 있는데, 무의식적으로 5분마다 핸드폰을 켠다는 통계가 존재하는 현실 속에서 우리는 그대로 무방비하게 platform의 사고방식에 노출되고 있다.
                </p>
                <p>
                최근에 이러한 Recommeder system에 대한 윤리적 연구도 이루어지고 있는 것으로 보이는데, Oxford에서 Ethical A.I, 최근에는 recommeder system에 대한 윤리적 문제를 연구하고 있는 Silvia Milano는 우리가 사용하는 Recommeder System의 ‘Stakeholders’, 즉 이 추천시스템으로부터 가장 이익을 보는 집단이 누군가를 알아야한다고 강조하고 있다. 이 부분이 굉장히 흥미로운데, 그녀가 출연한 youtube에서 introduction에서 아래와 같이 말하고 있다.
                </p>
                <p style={{fontFamily: "Cormorant garamond", fontStyle: "italic", textAlign: 'center', fontSize: 18}}>
                    “we'll be zooming into is this question of 
                    <span style={{color: 'red'}}>who the stakeholders are in modern recommender systems</span> so is it just about the end user is it just about the person who interacts with the twitter app or with netflix or whatever it may be or do we have to start zooming out a little a little bit more and thinking about companies thinking about systems thinking about even societies and civilizations”
                </p>
                <p>
                    결국에 이러한 추천시스템이 platform사용자, 즉 end user를 위한 것인지, 최종적으로는 기업이나 특정 단체를 위한 것인지에 대해서 우리는 알 필요가 있다는 것이다.
                </p>
                <Col width="60%" margin="margin: 0 20%">
                    <Image style={{width: '100%'}} of="contain" src={as2_1} />
                    <Text margin="margin-top: 10px;" style={{fontFamily: "Cormorant garamond", textAlign: 'center', fontSize: 18}}>Reference from <Text style={{fontStyle: 'italic', fontSize: 18}}>Recommeder System and their Ethical System</Text></Text>
                </Col>
                <p>
                    모든 정보는 ‘벡터성’을 지니고 있다. 그것이 news이던, 우리가 아무생각 없이posting하는 글이던, 은연중 자랑하기 위해 올리는 글이던, 모든 것은 특정한 목적을 지녔다는 의미다. user개인도 이러한데, 이 user들의 뭉친 집단적인 특성은 특정한 주제를 중심으로 더 편향되고 강력한 벡터성을 형성하기 쉽다. 흔히 ‘집단지성’으로 대표되는 다수의 의견과 사고의 힘은 platform에서 발현될때도 있지만, 이것은 user개개인의 합으로 이루어지기 보다 platform의 정해진 flow에 의해서 이루어질 가능성이 높은 것이다. 마치 하나의 ‘pipeline’처럼 말이다.
                </p>
                <p>
                상기 언급한 논문에서는 Recommeder System의 Ethical Problem을 다음과 같이 지적하고 있는데, 크게는 아래와 같다.
                </p>
                <ul>
                    <li>
                        Inapproriate content. (부적적한 contents) - Only a handful of studies to date address explicitly the ethics of Recommeder system as a specific issue in itself- 해당 논문에서는 ‘특정한 이슈’뿐만 아니라 전체적인 부분에서 Recommeder System의 윤리적 문제가 드러나고 있는데에 반해 특정한 이슈에만 한정하여 연구가 진행되고 있다고 강조한다.
                    </li>
                    <li>
                        Privacy (개인정보)
                    </li>
                    <li>
                        Opacity (투명성)
                    </li>
                    <li>
                        Fairness (공정성)
                    </li>
                    <li>
                        Social Effects (사회적 영향)
                    </li>
                </ul>
                <Col width="60%" margin="margin: 0 20%">
                    <Image style={{width: '100%'}} of="contain" src={as2_2} />
                    <Text margin="margin-top: 10px;" style={{fontFamily: "Cormorant garamond", textAlign: 'center', fontSize: 18}}>Reference from <Text style={{fontStyle: 'italic', fontSize: 18}}>Recommeder System and their Ethical System</Text></Text>
                </Col>
                <p>
                    끝으로, 많은 사회학적, 철학적, 사회과학적, 그리고 컴퓨터과학적 분야에서, 해당 문제들이 거의 다루어지지 않고 있다는 점을 지적하면서, 해당분야가 앞으로 더 심해질 Recommeder System의 문제에서 연구될 여지가 많이 남겨져있다는 것을 보인다. 
                </p>
                <Col width="60%" margin="margin: 0 20%">
                    <Image style={{width: '100%'}} of="contain" src={as2_3} />
                    <Text margin="margin-top: 10px;" style={{fontFamily: "Cormorant garamond", textAlign: 'center', fontSize: 18}}>Reference from <Text style={{fontStyle: 'italic', fontSize: 18}}>Recommeder System and their Ethical System</Text></Text>
                </Col>
                <p>
                    나도 이에 전적으로 동의하며, 이 문제는 Computer Science와 Literatural 분야를 넘어서 전 인류를 관통하는 큰 문제가 될 수도 있다고 생각한다. A.I, Blockchain (탈중앙 시스템) 등 현재 전쟁을 겪고 있는 인류만 봐도 이러한 Ethical한 방향을 중심으로 기술이 발전하고, <u>무엇보다 이 기술을 선도하는 platform기업을 강력하게 제재, 내지는 무너뜨릴수 있는 Conensus에 대한 연구가 가장 중요한 시점이라고 생각한다.</u>
                </p>
                <ol>
                    <Text>Reference</Text>
                    <li>Recommender System and their ethical challenges (Silvia Milano · Mariarosaria Taddeo · Luciano Floridi, Oxford University)</li>
                    <li>https://link.springer.com/article/10.1007/s00146-020-00950-y</li>
                    <li>https://towardsdatascience.com/ethical-problems-with-recommender-systeems-398198b5a4d2</li>
                    <li>https://youtu.be/Ng13EoLMCS8</li>
                </ol>
            </Text>
        </Col>,
    },
    {
        title: "March 31 Assignment",
        expansion: true,
        description: 
        <Col margin="margin-top: 20px;">
            <Text style={{margin: '0 20%'}} color={unlimitColor} lh="30" size="16.5">Q. 오늘 수업시간에 이야기 했던 것 처럼, ‘언어와 상식’의 부분은 단순한 언어인식의 수준과는 다른 차원이며, 이 부분을 어떻게 만들 수 있을 것인가는 인공지능에서도 가장 큰 어려운 난제 중의 하나이다. 이와 관련된 실험이 하나 있었는데, 바로 일본에서 진행했던 도쿄대학 합격 로보트 만들기 프로젝트였다. 관련된 자료를 찾아보고, 어떤 과목에서 어려움을 겪었는지 그 이유는 무엇인지, 그것의 해결이 가능할 것인지, 그 것의 해결을 위해서는 무엇이 준비되어야 하는지, 관련 내용을 정리하고 당신의 생각과 의견을 적으시오.</Text>
            
            <Text margin="margin: 20px 0;" lh="30">
                <p>
                    ‘What is the Context?’ 최근에 내가 딥러닝 많은 논문들을 읽으면서 느낀 걸 한문장으로 요약하자면 다음과 같다. ‘Context’, 즉 언어에서는 문맥이고, 비전에서는 객체를 둘러싸고 있는 상호 의존적 Scene이며, Agent에게는 환경에서의 특정 action의 heuristic(단서)로써 작용한다. 이러한 Context는 현재 인공지능에게 가장 중요한 키워드 중 하나이며, 적어도 2022년 현재 자연어처리와 비전분야에서는 더더욱 각광받는 주제라고 할 수 있다.
                </p>
                <p>
                    Ted영상에서 (4:25) “Unfortunately, none of the modern AIs, including Watson, Siri and Todai Robot, is able to read. But they are very good at searching and optimizing.“ 라는 말을 사회자가 하는데, 이는 즉, modern A.I는 안타깝게도 읽을 순 없지만, 대신에 검색과 최적화를 잘한다고 한다.  또한 이런 내용이 나온다. (5:42) “Our robot does not read, does not understand, but it is statistically correct in many cases.“ 
                </p>
                <p>
                    결국엔 로봇은 읽지도 못하고, 이해도 못하는데, 통계적으로 정답을 알아맞춘다는 것이다. 그렇다면 혹자는 이렇게 생각이 들 수도 있다. 
                    <strong>‘이것을 A.I 라고 할 수 있을까? 그냥 특정한 상황에서 최적화된 Search를 제공하는 컴퓨터에 불과하지 않는가? 애초에 A.I의 명확한 정의는 무엇인가?’</strong>
                    이는 즉 modern A.I에게 어떠한 문맥과 상황을 파악할 수 있는 능력이 없다는 것인데, 그렇다면 우리는 생각해볼 필요가 있다. 
                    <strong>‘읽다의 정의는 무엇일까? 읽고 이해함의 정의의 기준은 무엇이고, 그 최소의 능력은 과연 무엇이란 말인가?’</strong>
                </p>
                <p>
                    흥미롭게도 나는 최근 이러한 것들의 단서를 조금씩 찾아가기 시작하였으며, 놀라운 것은 이에 대한 단서는 지난 20년간 지속적으로 제기되어왔으나, 이를 명시적인 알고리즘으로 나타낸 것은 불과3~4년 사이라는 것이었다.
                </p>
                <p><strong>‘Connectivity’</strong></p>
                <p>
                    가장 밑단에서부터 고민해본다면, 우리는 Deep Learning, 즉 심층신경망과 그것을 이루는 가장 작은 단위인 Perceptron이 인간의 뇌를 본따 만들었다는 것을 안다.
                </p>
                <p>
                    ‘Connectivity’, 즉 연결성이란 작은 (기껏해봐야 특정 임계이상일 때 신호를 정제해주는) 단순한 작동을 하는 유닛들의 집합이 연결되고 모여서 특정한 군집을 형성하게 되고, 이러한 패턴들은 특정한 ‘연결성’을 다시 형성하게 된다. 즉, 작은 것들의 신호가 특정한 신호처리를 위해서 일련의 연결성을 띄고, 그 연결성에 따라서 우리는 거대하고 많은 복잡한 신호를 처리하는 것이다. 결국은 우리는 일련의 사고, 즉 먹고, 그림을 그리고, 글을 쓰고, 사고하는 모든 것들이 이 기본 단위의 집합에서 비롯되었으며, 이 단순한 개체의 특정한 연결성이 우리에게 일련의 행동과 사고를 비롯하게 한다는 것을 유추할 수 있다. 딥러닝은 이러한 유닛을 잘 쌓아 좋은 performace를 내는 인간이 만들어낸 도구중 하나이다. 우리는 이러한 심층신경망이 어떠한 의미에서 연결성을 통해 특정한 신호를 처리하는지 어느정도 이해할 수 있는 수준에 와있다.
                </p>
                <p>
                    <strong>Context in Vision: Convolutional Neural Networks</strong>
                </p>
                <p>
                    CNN에서의 필터는 조금 다르다고 생각될 수 있는데, 결국엔 각 레이어마다 필터의 Activation을 따라 특정 신호가 ‘강조’된다는 면에서 일반 MLP와 크게 다르지 않다. 다만 우리는 여기서 ‘시각적인 연결성’, 즉 시각적인 ‘문맥’을 더 파악할 수 있는데, 이것은 우리에게 특정한 객체 주위에 어떠한 문맥이 있을지 좋은 단서를 제공해준다. 다만 이는 receptive fields(필터)의 한계상 특정 영역에서의 단서, 즉 Locality를 통해서 우리에게 heuristic을 주는 것이다.
                </p>
                <p>
                    <strong>Go Back to the points…</strong>
                </p>
                <p>
                    결국엔 우리가 이해한다는 것은 여러 작은 단위 (그게 퍼셉트론이던, 소설 속 수많은 단어의 개별 집합이던 … )의 일련의 ‘연결성’이 가중됨에 따라서 특정한 이해를 하는 것이며, 이를 ‘문맥’이라고 할 수 있음을 유추할 수 있다. 이는 단순히 추상화된 언어의 영역에서 뿐만 아니라 비젼분야에서 먼저 발전되었는데, 이는 연결성이 곧 이해이며, 그 연결성의 강도 (MLP에서의 Weight, CNN 에서의 receptive fields) 들이 곧 ‘문맥’이 됨을 인지한다.
                </p>
                <p>
                    <strong>Context in Natural Language</strong>
                </p>
                <Col width="60%" margin="margin: 0 20%">
                    <Image style={{width: '100%'}} of="contain" src={as3_1} />
                    <Text margin="margin-top: 10px;" style={{fontFamily: "Cormorant garamond", textAlign: 'center', fontSize: 18}}>Figure 1 ) Probabilistic Approach of NLP</Text>
                </Col>
                <p>
                    초기에 자연어처리 모델에서의 문맥은 확률적인 모델에 근사하여 등장하였다. 흥미로운점은 자연어 처리의 특성상 초기부터 ‘문맥’의 개념을 도입해서 모델을 구성하였다는 것인데, 이점에서 기계가 완전히 이해를 못한다고 생각할 수는 없다. 적어도 잘 모아지고 잘 학습된 데이터셋에서는 좋은 성능과 좋은 결과를 보일 수 있다는 점이 그것이다. 하지만 이러한 ‘serial’(일련의) 모델 구성은 여러 한계가 있는데, 바로 병렬연산이 불가능하다는 것이고, 다른 하나는 context간의 gradient가 vanishing되기 쉽다는 것이다. 즉 이는 개념은 좋았지만, 완전한 의미에서의 context가 학습이 힘들었던 것이다.
                </p>
                <p><strong>Attention is All You Need (NIPS 2017)</strong></p>
                <Col width="60%" margin="margin: 0 20%">
                    <Image style={{width: '100%'}} of="contain" src={as3_2} />
                    <Text margin="margin-top: 10px;" style={{fontFamily: "Cormorant garamond", textAlign: 'center', fontSize: 18}}>Figure 2) Self-Attention Mechanism</Text>
                </Col>
                <p>
                    그러다 혜성처럼 등장한 모델이 있다. 바로 Attention이다. 이 Attention은 크게 self-attention과 multi-head-attention으로 이루어지는데, 단순하다. Self-attention은 자기 자신 페어에 대해서 각각의 연결성, 즉 어떤 부분에 더 연관성이 있는지 집중(Attention)을 해보는 것이고, multi-head-attention은 자기 자신과 비교할 대상이 있는 객체에 대해 Attention을 해보는 것이다. 이를 통해서 우리는 좀 더 강화된 Context를 학습할 수 있고, 특히 context가 중요한 nlp에서는 이제 universal한 model로써 자리잡았다.
                </p>
                <p>
                    Attention이 흥미로운 이유는 다음과 같다. 사실 간단한 아이디어인데, 이가 굉장히 universal한 task로 기대되고 있다. 결국엔 비젼이던, 자연어처리던 문맥이 바탕이 되고, 이 문맥으로 하여금 우리는 여러 확률적 approach를 통해 유추할 뿐이다. 즉 우리는 ‘문맥을 통한 사고구축’을 ‘이해’라고 할 수 있을 것이다. 
                </p>
                <p>
                    기계던 인간이던 ‘이해’한다는 것은 매우 추상적이며, 이를 명료화시켜서 어느 기준부터 이해고, 어느 기준에 도달하지 못하면 이해가 아니라고 정의 내릴 수 없다. 다만, 우리는 특정 개념들로부터 ‘연결’을 할 수 있으며, 그 유의미한 연결을 통해서 특정한 ‘사고’를 이끌어 낼 수 있으면 그걸 이해라고 하는게 더 합리적일 것이다.
                </p>
                <Col width="60%" margin="margin: 0 20%">
                    <Image style={{width: '100%'}} of="contain" src={as3_3} />
                    <Text margin="margin-top: 10px;" style={{fontFamily: "Cormorant garamond", textAlign: 'center', fontSize: 18}}>Figure 3 ) Vision Transformer, ICLR 2021</Text>
                </Col>
                <p>
                    이런면에서 최근의 자연어처리 분야의 발전은 매우 눈부시다. Transformer는 최근에 자연어처리에 모든 모델을 대체함에 지나지 않고, Visual Recognition 분야에서 CNN을 밀어내고 있다.
                </p>
                <p>
                    이는 결국 ‘이해’를 한다는 것은 ‘문맥’을 안다는 것이고, 이것이 근본적으로 우리가 인간을 이해하거나 기계를 설계해야할 때 가져야할 기본적인 사고 아닐까? Transformer가 딥러닝의 universal한 task로 기대되어지는 것은 이와 별반 다르지 않을 것이다.
                </p>
                <p><strong>Reference</strong></p>
                <ul>
                    <li>
                        Attention is All You Need - https://arxiv.org/abs/1706.03762
                    </li>
                    <li>
                        An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale - https://arxiv.org/abs/2010.11929
                    </li>
                    <li>
                        Transformer: A Novel Neural Network Architecture for Language Understanding - https://ai.googleblog.com/2017/08/transformer-novel-neural-network.html
                    </li>
                </ul>
            </Text>
        </Col>
    }
]

export default contents;