import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import { fadeIn } from 'react-animations';
import { fadeOut } from 'react-animations';

import { StyleSheet, css } from 'aphrodite/no-important';


function Group(props) {
  var groupStyle = {};
  var imageStyle = {};
  if (props.indexed == 0) {
    groupStyle = ({
      // backgroundColor: "#eef2f2",
      backgroundColor: "",

      height: "32px",
      width: "130px",

    })
    imageStyle = {
      float: "left",
      margin: "0",
      marginLeft: "15px",
      padding: "12px",
      maxWidth: "24",
      backgroundSize: "cover",
      opacity: "0.6",
      marginTop: "4px",
      backgroundImage:`url(${props.image})`,
    }
  } else {
    groupStyle = {
      backgroundColor: "#BBBBBB",
      height: "32px",
      width: "130px",
      opacity:"0.9",
    }
    imageStyle = {
      float: "left",
      margin: "0",
      marginLeft: "15px",
      padding: "12px",
      maxWidth: "24",
      backgroundSize: "cover",
      opacity: "0.9",
      marginTop: "4px",
      backgroundImage:`url(${props.image})`,
    }
  }
  return (

    <div style={groupStyle} id="myGroupId0" onClick={props.onClick}>
      <div style={imageStyle}></div>
      {/* <img src = {props.image}/> */}
      <div id="profileDiv">
        <p >{props.value}</p>
      </div>
    </div>

  );
}

class GroupsBar extends React.Component {

  componentDidUpdate() {


  }

  renderGroup(i) {
    var indexReturn = 0;
    if (i == this.props.groupIndex) {
      indexReturn = 1;
    }
    return (
      <Group
        indexed={indexReturn}
        value={this.props.groups[i]}
        image={this.props.groupsImage[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {

    // const styles = StyleSheet.create({
    //   fadeOut: {
    //     animationName: fadeOut,
    //     animationDuration: '0s'
    //   },
    //   bounce: {
    //     animationName: fadeIn,
    //     animationDuration: '1s'
    //   }
    // })


    return (
      <div >
        {/* <div id = "groupBar" className={css(styles.bounce)}> */}
          <div id="findSideTopBar">
            <p>Find</p>

          </div>
          {this.renderGroup(0)}
          {this.renderGroup(1)}
          {this.renderGroup(2)}
          {this.renderGroup(3)}
          {this.renderGroup(4)}
          {this.renderGroup(5)}
          {this.renderGroup(6)}

        </div>



    );
  }

}

export default GroupsBar;
