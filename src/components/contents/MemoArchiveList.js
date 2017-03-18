import React from 'react';
import MemoArchiveCard from './MemoArchiveCard';
/**
 * @classdesc MemoArchiveList
 */
export default class MemoArchiveList extends React.Component {
    /**
     * @param {Object} props
     */
    constructor(props) {
        super(props);
        this.memoArchiveList = this.props.memoList;
    }

    /**
     * 
     */
    static get propTypes() {
        return {
            // memoList: React.PropTypes.object,
            handleMemoArchiveListClick: React.PropTypes.func,
            handleTrashIconClick: React.PropTypes.func,
        };
    }

    /**
     * @return {React.Component} obj
     */
    render() {
        const memoArchiveList = this.memoArchiveList.map((memo) => {
            return (
                <MemoArchiveCard key={memo.key}
                    memoData={memo} 
                    handleMemoClick={this.props.handleMemoArchiveListClick}
                    handleTrashIconClick={this.props.handleTrashIconClick}
                />
            );
        });
        return (
            <article className="area_archive">
                {memoArchiveList}
            </article>
        );
    }
}
