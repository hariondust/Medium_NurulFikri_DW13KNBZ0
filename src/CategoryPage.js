import React, {Component} from 'react';
import {Grid, Item, Image, Menu, Button, Container, Divider, Icon} from 'semantic-ui-react';
import CategoryMain from './Component/CategoryMain';
import CategoryFooter from './Component/CategoryFooter';


export default class CategoryPage extends Component {
  render() {

    return (
      <div className="categoryPage">
        <div className="categoryContent">
          <Grid columns={3} style={{marginTop:"40px"}}>
            <Grid.Row>
              <Grid.Column width={5}>
                <div className="headerLogo" style={{paddingLeft:"115px"}}>
                  <Image src="https://miro.medium.com/max/540/1*cw32fIqCbRWzwJaoQw6BUg.png" style={{width:"270px", height:"61"}}></Image>
                </div>
              </Grid.Column>
              <Grid.Column width={6}>
                <div className="headerTitle" style={{paddingLeft:"0px", textAlign:"left"}}>
                    <span className="t1" style={{color:"#6A0BFF", fontSize:"20px", lineHeight:"30px", fontFamily:"onezero yellix alt"}}>The front lines of the future.</span>
                    <span className="t1" style={{color:"#000", fontSize:"20px", lineHeight:"30px", fontFamily:"onezero yellix alt"}}> A Medium Publication about tech and science.</span>
                </div>
              </Grid.Column>
              <Grid.Column width={4} style={{textAlign:"right", position:"relative"}}>
                      <Button basic size="mini" color="blue" style={{position:"absolute", bottom:"8px", right:"40px"}}>Follow</Button>
                </Grid.Column>
            </Grid.Row>
          </Grid>
          {mainCategory.map(Item =>
            <CategoryMain
            title1={Item.title1}
            title2={Item.title2}
            img1={Item.img1}
            img2={Item.img2}
            context1={Item.context1}
            context2={Item.context2}
            color1={Item.color1}
            color2={Item.color2}
            writer1={Item.writer1}
            writer2={Item.writer2}
            date1={Item.date1}
            date2={Item.date2}
            />)}
            <Grid columns={1}>
              <Grid.Row>
              <Grid.Column width={14} color="olive" style={{height:"200px", width:"1192px", marginTop:"20px", marginBottom:"20px", marginLeft:"138px", marginRight:"122px"}}>
              <div className="articleText" style={{marginLeft:"250px"}}>
                <div className="title" style={{textAlign:"left", fontSize:"30px", lineHeight:"34px", color:"#000", paddingTop:"10px", marginBottom:"8px"}}>
                  We have a few new things to share"
                </div>
                <div className="context" style={{textAlign:"left", fontSize:"16px", marginBottom:"35px", color:"black", padding:"0px", paddingTop:"5px"}}>
                  <strong>— Damon Beres</strong>
                </div>
                <div className="writer" style={{textAlign:"left", color:"#000", fontSize:"16px", marginBottom:"5px", padding:"0px"}}>
                Welcome to a Refreshed OneZero
                </div>
                <div className="datetime" style={{textAlign:"left", color:"#000", fontSize:"16px", marginBottom:"40px"}}>
                  <strong>Dec 3 - 2 min read</strong>
                </div>
              </div>
              </Grid.Column>
              </Grid.Row>
            </Grid>
            {footerArticle.map(Item =>
              <CategoryFooter
              title={Item.title}
              img={Item.img}
              context={Item.context}
              writer={Item.writer}
              date={Item.date}
              />)}
        </div>
      </div>
    )
  };
}

const mainCategory = [
  {
    id1: 1,
    img1: "https://miro.medium.com/max/1512/1*jOvu1hK1XTrBswWU7hHcMg.jpeg",
    title1: "The Influencer and The Hit Man",
    context1: "How a years-long domain name feud ended in a bloody shotout",
    writer1: "Ian Frisch",
    date1: "Dec 10 - 24 min read",
    color1: "yellow",
    id2: 2,
    img2: "https://miro.medium.com/max/680/1*MDxT8MJL3DmelDMv3-gd9A.gif",
    title2: "A Googler Explains Exactly How the Pixel 4 Captures the Night Sky",
    context2: "We went stargazing with project manager Alex Schiffhauer to learn more about the new phone's astrophotography mode",
    writer2: "Aaron Gell",
    date2: "Dec 10 - 13 min read",
    color2: "white",
  },
  {
    id1: 1,
    img1: "https://miro.medium.com/max/680/0*LG1uUR7TbMplW8xf",
    title1: "Mood-Altering Wearables Are Silicon Valley’s Newest Delusion",
    context1: "New devices tap into the age-old promises of mood alteration",
    writer1: "Aimee Pearchy",
    date1: "Dec 10 - 5 min read",
    color1: "blue",
    id2: 2,
    img2: "https://miro.medium.com/max/680/1*yYP8rlvTuCML1_N9AlQOTg.jpeg",
    title2: "How to Totally Escape Ad Tracking at Home",
    context2: "Shutting down ad trackers at the network level is difficult, but not impossible",
    writer2: "Owen William",
    date2: "Dec 10 - 5 min read",
    color2: "white",
  },
  {
    id1: 1,
    img1: "https://miro.medium.com/max/1512/1*TBVJ41WGvXQMDZTLhl0RbA.jpeg",
    title1: "Uber Delivery Workers Track Thieves Through a Secret Network",
    context1: "A 1,000-person WhatsApp community keeps delivery workers safe",
    writer1: "Martha Pskowski",
    date1: "Dec 11 - 9 min read",
    color1: "purple",
    id2: 2,
    img2: "https://miro.medium.com/max/1512/1*-8KL6r_tNZ9B2Lfz_9dc0Q.png",
    title2: "A New Smart Contact Lens Charges Without Burning Your Eyes",
    context2: "The technology uses supercapacitors and will help speed the creation of contacts lenses that monitor the body",
    writer2: "Yasmin Tayag",
    date2: "Dec 11 - 3 min read",
    color2: "white",
  }
]
const footerArticle = [
  {
    id: 1,
    img: "https://miro.medium.com/max/756/1*csm12WLUqj53wH7gajw8Rg.jpeg",
    title: "'I Felt Like a Time Traveler': 6 Months Without Internet",
    context: "The artist Nastja Sade Ronkko talks about what life was like when she utterly disconnected from the online world for half a year",
    writer: "Thomas McMullan",
    date: "Dec 11 - 5 min read",
  },
  {
    id: 1,
    img: "https://miro.medium.com/max/756/1*Tc40NLUUtVafKwrl28VBrQ.jpeg",
    title: "If It’s OK to Fantasize About Someone You Know, Why Not in VR?",
    context: "Erotic deepfakes are only going to make the question of sexual ethics muddier and more confusing",
    writer: "Lux Alptraum",
    date: "Dec 11 - 7 min read",
  },
  {
    id: 3,
    img: "https://miro.medium.com/max/756/1*PWGpuXNpkASi6_Sbio7WaQ.jpeg",
    title: "How the PlayStation Took Over the World",
    context: "Will the strategies that have powered Sony’s success in gaming for 25 years translate to the streaming generation?",
    writer: "Eric Ravenscraft",
    date: "Dec 10 - 7 min read",
  },
  {
    id: 4,
    img: "https://miro.medium.com/max/756/1*uNgmHEUZHeBejN0JKd_m8A.gif",
    title: "The Forgotten Pixel Art Masterpieces of the PlayStation 1 Era",
    context: "Video games simply aren’t made like this anymore",
    writer: "Richmond Lee",
    date: "Dec 7 - 12 min read",
  }
]
