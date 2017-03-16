import React from 'react';

/**
 * @classdesc MemoArchiveCard
 */
export default class MemoArchiveCard extends React.Component {

    /**
     * 
     * @param {Object} props 
     */
    constructor(props) {
        super(props);
        this.memoData = this.props.memoData;

        this.archiveCardClick = this.archiveCardClick.bind(this);
    }

    /**
     * @param {String} str
     * @param {Number} length
     * @return {String} shortStr
     */
    cutContentsStr(str, length) {
        if(str === undefined) {
            return;
        }
        return str.substring(0, length);
    }

    /**
     * 
     * @param {React.Event} e 
     */
    archiveCardClick(e) {
        this.props.handleMemoClick(this.memoData);
    }

    
    /**
     * @return {ReactComponent} 
     */
    render() {
        return (
            <section onClick={this.archiveCardClick}>
                {/* タイトル */}
                <header>
                    <span className="title_memo">
                        {this.memoData.title}
                    </span>
                    <span className="icon_delete">
                        <a href="#"></a>
                    </span>
                </header>
                <div>
                    {this.cutContentsStr(this.memoData.contents, 20)}
                </div>
            </section>
        );
    }
}
