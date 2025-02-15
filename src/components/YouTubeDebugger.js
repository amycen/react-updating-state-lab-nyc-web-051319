// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    changeBitrate = () => {
        this.setState({ settings: {...this.state.settings, bitrate: 12}})
    }

    changeRes = () => {
        this.setState({
            settings: {
                ...this.state.settings, video: {
                    resolution: '720p'
                }
            }
        })
    }
    
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.changeBitrate}></button>
                <button className="resolution" onClick={this.changeRes}></button>
            </div>
        );
    }
}

export default YouTubeDebugger;
