import React, { Component } from 'react'
import TaskTable from '../Components/taskTable';
export default class Home extends Component{
    render(){
        return(
            <div className="main-conatainer">
                <section className="polsource-poster">
                    <img src="https://s3.amazonaws.com/crm.consulting/logos/polsource.png" alt="POLSOURCE Campany"/>
                </section>
                <TaskTable/>
            </div>
        )
    }
}