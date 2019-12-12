import React, {Component} from 'react';
import {Grid, Item, Image, Menu, Button} from 'semantic-ui-react';


export default class CategoryMain extends Component {
  render() {

    return (

          <Grid relaxed>
                  <Grid.Row column={2} style={{maxWidth:"1192px", marginLeft:"140px"}}>
                    <Grid.Column width={10} style={{height:"354px", marginTop:"20px", maxWidth:"728px", marginRight:"0px", padding:"0px"}}>
                      <div className="articlePicture">
                          <Image src={this.props.img1} height="354px" width="728"></Image>
                      </div>
                    </Grid.Column>
                    <Grid.Column width={5} color={this.props.color1} style={{height:"354px", marginTop:"20px"}}>
                    <div className="articleText" style={{}}>
                      <div className="title" style={{textAlign:"center", fontSize:"24px", lineHeight:"34px", color:"#000", paddingTop:"50px"}}>
                        <strong>{this.props.title1}</strong>
                      </div>
                      <div className="context" style={{textAlign:"center", fontSize:"16px", marginBottom:"24px", color:"white", paddingTop:"10px"}}>
                        {this.props.context1}
                      </div>
                      <div className="writer" style={{textAlign:"center", color:"#000", fontSize:"16px", marginBottom:"0px", paddingTop:"20px"}}>
                        {this.props.writer1}
                      </div>
                      <div className="datetime" style={{textAlign:"center", color:"#000", fontSize:"16px", marginBottom:"20px"}}>
                        <strong>{this.props.date1}</strong>
                    </div>
                </div>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row column={2} style={{maxWidth:"1192px", marginLeft:"140px"}}>
                  <Grid.Column width={5} color={this.props.color2} style={{height:"354px", marginTop:"20px"}}>
                  <div className="articleText" style={{}}>
                    <div className="title" style={{textAlign:"center", fontSize:"24px", lineHeight:"34px", color:"#000", paddingTop:"50px"}}>
                      <strong>{this.props.title2}</strong>
                    </div>
                    <div className="context" style={{textAlign:"center", fontSize:"16px", marginBottom:"24px", color:"black", paddingTop:"10px"}}>
                      {this.props.context2}
                    </div>
                    <div className="writer" style={{textAlign:"center", color:"#000", fontSize:"16px", marginBottom:"0px", paddingTop:"20px"}}>
                      {this.props.writer2}
                    </div>
                    <div className="datetime" style={{textAlign:"center", color:"#000", fontSize:"16px", marginBottom:"20px"}}>
                      <strong>{this.props.date2}</strong>
                    </div>
                  </div>
                  </Grid.Column>
                  <Grid.Column width={10} style={{height:"354px", marginTop:"20px", padding:"0px", maxWidth:"728px"}}>
                      <div className="articlePicture">
                          <Image src={this.props.img2} height="354px" width="728px"></Image>
                      </div>
                  </Grid.Column>
                </Grid.Row>
            </Grid>
          )
  };
}
