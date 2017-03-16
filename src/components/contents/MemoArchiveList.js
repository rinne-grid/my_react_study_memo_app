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
     * @return {React.Component} obj
     */
    render() {
        const memoArchiveList = this.memoArchiveList.map((memo) => {
            return (
                <MemoArchiveCard key={memo.key}
                    memoData={memo} 
                    handleMemoClick={this.props.handleMemoArchiveListClick}
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
