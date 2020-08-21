import React, { Component } from 'react'
import TabSelect from '../../components/TabSelect'

export default class Detail extends Component {
    render() {
        return (
            <div>
                这个地方是详情页面1
                <TabSelect  left={<div>这个是左边的</div>}>
                    <tab tabname="第一个标题">
                      <div>内容1</div>
                    </tab>
                    <tab tabname="第2个标题">
                    <div>内容2</div>
                    </tab>
                   
                </TabSelect>
            </div>
        )
    }
}
