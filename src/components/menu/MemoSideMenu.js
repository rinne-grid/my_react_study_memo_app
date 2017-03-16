import React from 'react';

/**
 * @classdesc MemoSideMenu
 */
export default class MemoSideMenu extends React.Component {
    /**
     * 
     * @param {Object} props 
     */
    constructor(props) {
        super(props);
    }

    /**
     * @param {React.EventHandler} e
     */
    addMemoClick(e) {
        // 新規メモの作成
        this.props.addMemoCard();
    }

    /**
     * @param {React.EventHandler} e
     */
    searchMemoClick(e) {
    }

    /**
     * @return {ReactComponent}
     * render 
     */
    render() {
        return (
            <article className="area_side">
                {/* サイドエリア */}
                <nav>
                    <div 
                        className="btn_circle" 
                        id="add_memo"
                        onClick={
                            (e) => {this.addMemoClick();}
                        } 
                        >
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </div>
                    <div 
                        className="btn_circle"
                        id="search_memo"
                        onClick={
                            (e) => {this.searchMemoClick();}
                        }
                        >
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </div>
                </nav>
            </article>

        );
    }
}
