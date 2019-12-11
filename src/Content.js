import React, { Component, createRef } from "react";
import { Grid, Menu, Image, Container, Header, Item, Segment, Divider, Icon, List, Sticky, Rail, Ref } from "semantic-ui-react";
import MiniArticle from './Component/MiniArticle';
import PopularArticle from './Component/PopularArticle';
import HistoryArticle from './Component/HistoryArticle';


export default class TopContent extends Component {
  contextRef = createRef()
  render() {

    return (
        <Grid divided="vertically" style={{height:"600px", paddingLeft:"5%", paddingRight:"5%"}}>
          <Grid.Row columns={3}>
              <Grid.Column>
                <div className="leftMain">
                  <article>
                    <div className="articleImage" fluid style={{paddingBottom:"10px"}}>
                      <Image src="https://cdn-images-1.medium.com/focal/458/166/50/40/0*hivAXN066T18cBcJ" />
                    </div>
                    <div className="articleContent" style={{textAlign:"left", marginLeft:"88px" }}>
                      <h2 style={{}}>What Good Sleepers Don"t Do</h2>
                      <p style={style.contentMain}>When it comes to restful slumber, there is no try</p>
                      <a className="writerData" href="#" style={style.writerName}>Nigma Wignall</a> in <a href="#" style={style.writerName}>Forge</a>
                      <p style={style.contentMain}>Mar 8 &middot; <time>4 min</time> read <Icon name="star" size="small"/></p>
                    </div>
                  </article>
                </div>
              </Grid.Column>

              <Grid.Column>
                <article>
                  <Grid.Row stretched>
                    <Grid.Column>
                      <div className="middleMain" style={{textAlign:"left", fontFamily:"Arial"}}>
                          {miniarticle.map(Item =>
                            <MiniArticle
                            title={Item.title}
                            subtitle={Item.subtitle}
                            info={Item.info}
                            img={Item.img}
                            group={Item.group}
                            writer={Item.writer}
                            />)}
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </article>
              </Grid.Column>

              <Grid.Column>
                <div className="rightMain">
                  <article>
                    <Image src="https://cdn-images-1.medium.com/focal/554/244/49/66/0*oh_UrqcWt09kLszS.gif" />
                    <div className="articleContent" style={{textAlign:"left", marginRight:"88px" }}>
                      <h2 style={{}}>The End of Snap and Tesla</h2>
                      <p style={style.contentMain}>Snap and Tesla were sold this week..</p>
                      <a className="writerData" href="#" style={style.writerName}>Scott Galloway</a> in <a href="#" style={style.writerName}>No Mercy / No Mallice</a>
                      <p style={style.contentMain}>Oct 2 &middot; <time>7 min</time> read <Icon name="star" size="small"/></p>
                    </div>
                  </article>
                  <article>
                  <div className="mainLink">
                    <a href="#" style={{color:"green", float:"right", paddingRight:"50px", paddingTop:"30px"}}><strong>SEE ALL FEATURED <Icon name="angle right" size="small"/></strong></a>
                  </div>
                  </article>
                </div>
              </Grid.Column>

          </Grid.Row>
          <Container>
            <Divider/>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={5}>
                <Ref innerRef={this.contextRef}>
                  <Rail>
                    <Sticky context={this.contextRef}>
                      <div class="headPopular" style={{textAlign:"left", color:"black", paddingTop:"50px"}}>
                        <h3>Popular on Medium</h3>
                      </div>
                      <Divider />
                      {populararticle.map(Item =>
                        <PopularArticle
                        number={Item.number}
                        title={Item.title}
                        info={Item.info}
                        group={Item.group}
                        writer={Item.writer}
                        />)}
                      <Divider />
                      <List horizontal style={{ marginRight:"20px", fontSize:"14px"}}>
                        <List.Item as='a' style={{color:"grey"}}>Help</List.Item>
                        <List.Item as='a' style={{color:"grey"}}>Status</List.Item>
                        <List.Item as='a' style={{color:"grey"}}>Writers</List.Item>
                        <List.Item as='a' style={{color:"grey"}}>Blog</List.Item>
                        <List.Item as='a' style={{color:"grey"}}>Careers</List.Item>
                        <List.Item as='a' style={{color:"grey"}}>Privacy</List.Item>
                        <List.Item as='a' style={{color:"grey"}}>Terms</List.Item>
                        <List.Item as='a' style={{color:"grey"}}>About</List.Item>
                      </List>
                      </Sticky>
                    </Rail>
                  </Ref>
                      </Grid.Column>
                      <Grid.Column width={10}>
                        {historyarticle.map(Item =>
                        <HistoryArticle
                        title={Item.title}
                        subtitle={Item.subtitle}
                        info={Item.info}
                        writer={Item.writer}
                        group={Item.group}
                        img={Item.img}
                      />)}
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Container>
          </Grid>






    )
  };
}

const style = {
  writerName: {
    color: "black",

  },
  contentMain: {
    color: "grey",
    textAlign: "left",
  },
}

const miniarticle = [
  {
    id: 1,
    title:"Are You a Boomer? Take this Quiz to Find Out!",
    subtitle:"",
    img:"https://cdn-images-1.medium.com/fit/c/110/110/1*MoyfuMp9gduBYY0rJAe8VA.jpeg",
    info:"Dec 2 - 5 min read",
    writer:"Jessica Wildfire",
    group:"Forge",
  },
  {
    id: 2,
    title:"The Economics of the Boomer",
    subtitle:"America is getting older. Indebtedness is rising.",
    img:"https://cdn-images-1.medium.com/focal/110/110/33/68/1*df6SmsVK8k5m-gL85RqSag.jpeg",
    info:"Dec 7 - 3 min read",
    writer:"Byrne Hobart",
    group:"Maker",
  },
  {
    id: 3,
    title:"Plastic Surgeons Are Using Eye-Tracking Tech to Make Better Breasts",
    subtitle:"",
    img:"https://cdn-images-1.medium.com/focal/110/110/50/95/1*Aj6EonMciZjMayKzRbIuvQ.jpeg",
    info:"Dec 6 - 5 min read",
    writer:"Yasmin Tayag",
    group:"OneZero",
  },
]

const populararticle = [
  {
    id: 1,
    number: "01",
    title:"Are You a Boomer? Take this Quiz to Find Out!",
    info:"Dec 2 - 5 min read",
    writer:"Jessica Wildfire",
    group:"Forge",
  },
  {
    id: 2,
    number: "02",
    title:"Are You a Boomer? Take this Quiz to Find Out!",
    info:"Dec 2 - 5 min read",
    writer:"Jessica Wildfire",
    group:"Forge",
  },
  {
    id: 3,
    number: "03",
    title:"Are You a Boomer? Take this Quiz to Find Out!",
    info:"Dec 2 - 5 min read",
    writer:"Jessica Wildfire",
    group:"Forge",
  },
]

const historyarticle = [
  {
    title: "Code Review Best Practices",
    img: "https://cdn-images-1.medium.com/fit/c/167/172/1*O0Vxl1Vajl21Kt288ybc-w.png",
    info: "Mar 5 - 12 min read",
    writer: "Palantir",
    group:"Palantir Blog",
    subtitle:"The internet provides a wealth of material on code review: on the effect of code reviews on company culture",
  },
  {
    title: "Code Review Best Practices",
    img: "https://cdn-images-1.medium.com/fit/c/167/172/1*O0Vxl1Vajl21Kt288ybc-w.png",
    info: "Mar 5 - 12 min read",
    writer: "Palantir",
    group:"Palantir Blog",
    subtitle:"The internet provides a wealth of material on code review: on the effect of code reviews on company culture",
  },
  {
    title: "Code Review Best Practices",
    img: "https://cdn-images-1.medium.com/fit/c/167/172/1*O0Vxl1Vajl21Kt288ybc-w.png",
    info: "Mar 5 - 12 min read",
    writer: "Palantir",
    group:"Palantir Blog",
    subtitle:"The internet provides a wealth of material on code review: on the effect of code reviews on company culture",
  },
  {
    title: "Code Review Best Practices",
    img: "https://cdn-images-1.medium.com/fit/c/167/172/1*O0Vxl1Vajl21Kt288ybc-w.png",
    info: "Mar 5 - 12 min read",
    writer: "Palantir",
    group:"Palantir Blog",
    subtitle:"The internet provides a wealth of material on code review: on the effect of code reviews on company culture",
  },
  {
    title: "Code Review Best Practices",
    img: "https://cdn-images-1.medium.com/fit/c/167/172/1*O0Vxl1Vajl21Kt288ybc-w.png",
    info: "Mar 5 - 12 min read",
    writer: "Palantir",
    group:"Palantir Blog",
    subtitle:"The internet provides a wealth of material on code review: on the effect of code reviews on company culture",
  },
  {
    title: "Code Review Best Practices",
    img: "https://cdn-images-1.medium.com/fit/c/167/172/1*O0Vxl1Vajl21Kt288ybc-w.png",
    info: "Mar 5 - 12 min read",
    writer: "Palantir",
    group:"Palantir Blog",
    subtitle:"The internet provides a wealth of material on code review: on the effect of code reviews on company culture",
  },
  {
    title: "Code Review Best Practices",
    img: "https://cdn-images-1.medium.com/fit/c/167/172/1*O0Vxl1Vajl21Kt288ybc-w.png",
    info: "Mar 5 - 12 min read",
    writer: "Palantir",
    group:"Palantir Blog",
    subtitle:"The internet provides a wealth of material on code review: on the effect of code reviews on company culture",
  },
  {
    title: "Code Review Best Practices",
    img: "https://cdn-images-1.medium.com/fit/c/167/172/1*O0Vxl1Vajl21Kt288ybc-w.png",
    info: "Mar 5 - 12 min read",
    writer: "Palantir",
    group:"Palantir Blog",
    subtitle:"The internet provides a wealth of material on code review: on the effect of code reviews on company culture",
  },
]
