import React, { Component } from 'react'
import './ProgressBar.component.style.scss'

export class ProgressBar extends Component {
  render() {
    const { checkoutStep , stepMap} = this.props;
    const stepKeys= Object.keys(stepMap);
    const stepAmmount=stepKeys.length;
    // const stepWidth=100/stepAmmount;
    const activeIndex=stepKeys.indexOf(checkoutStep)
    const stepWidth = (100 / stepAmmount) + "%";
    const width=`calc(${stepWidth}%-15px)`
    console.log(checkoutStep)
    return (
      <div className='progress_bar'>
        {/* <div className='progress_bar_line' style={{width:`calc(${stepWidth}%-15px)`}}></div> */}
        {stepKeys.map((key, i)=>{
          const active= i<=activeIndex;
          console.log(active)
            return(
                <div className='progress_bar_grid '>
                    <div className= {`progress_bar_line ${active? 'active_step': null}`} ></div>
                    { i==stepAmmount-1?
                      <div className= {`progress_bar_line `} >
                        {/* {active?<div className='active_step_line' ></div>: null} */}
                        <div className={` ${active? 'active_step_line': null}`}></div>
                      </div> :
                      <div className={`step_circle flex ${active? 'active_step': null}`} >{i+1}</div>
                    }
                    
                </div>
                
            )
        })}
      </div>
    )
  }
}

export default ProgressBar;