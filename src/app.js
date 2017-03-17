import React from 'react';
import {render} from 'react-dom';
import MemoSideMenu from './components/menu/MemoSideMenu';
import MemoArchiveList from './components/contents/MemoArchiveList';
import MemoEditor from './components/contents/MemoEditor';
/** 
 * @classdesc App 
 */
class App extends React.Component {
    
    /**
     * 
     */
    static get propTypes() {
        return {
            title: React.PropTypes.string,
            contents: React.PropTypes.string,
        };
    }
    /**
     * 
     * @param {Object} props 
     */
    constructor(props) {
        super(props);

        // 最初の表示するメモの設定
        let firstKey = this.props.memoList.length;
        let firstTitle = this.props.memoList[firstKey - 1].title;
        let firstContents = this.props.memoList[firstKey - 1].contents;
        // 全くメモが格納されていない場合、空白で表示しておく

        if(firstKey === 0) {
            firstKey = 1;
            firstTitle = '';
            firstContents = '';
        }

        this.state = {
            memoList: this.props.memoList.sort( (a, b) => {
                if(a.key < b.key) {
                    return 1;
                }
                if(a.key > b.key) {
                    return -1;
                }
                return 0;
            }),
            editorData: {
                key: firstKey,
                title: firstTitle,
                contents: firstContents,
            },
        };

        this.sendCardToEditor = this.sendCardToEditor.bind(this);
        this.saveCardToState = this.saveCardToState.bind(this);
        this.addMemoCard = this.addMemoCard.bind(this);
        this.removeMemoCard = this.removeMemoCard.bind(this);
    }

    /**
     *  @param {Object} memoData
     *  MemoArchiveCardから受け取ったmemoDataをstateに保持
     */
    sendCardToEditor(memoData) {
        this.setState({
            editorData: memoData,
        });
    }

    /**
     * 
     * @param {Object} memoData 
     */
    saveCardToState(memoData) {
        // memo.keyがブランクの場合、新規作成
        let memoList = this.state.memoList;
        
        // TODO: 要リファクタリング
        let exists = false;
        for(let i = 0; i < memoList.length; i++) {
            if(memoList[i].key === memoData.key) {
                memoList[i].title = memoData.title;
                memoList[i].contents = memoData.contents;
                exists = true;
                break;
            }
        }
        if(!exists) {
            memoList.unshift(memoData);
        }
        // memoList.push(memoData);
        this.setState({
            memoList: memoList,
            editorData: memoData,
        });
    }

    /**
     * 
     */
    addMemoCard() {
        // console.table(this.state.memoList);
        let newMemoData = {
            key: this.state.memoList.length + 1,
            title: '',
            contents: '',
        };
        this.setState({
            editorData: newMemoData,
        });
    }

    /**
     * @param {Object} memoData
     */
    removeMemoCard(memoData) {
        let memoList = this.state.memoList;
        for(let i = 0; i < memoList.length; i++) {
            if(memoData.key === memoList[i].key) {
                memoList.splice(i, 1);
            }
        }
        this.setState({
            memoList: memoList,
            editorData: {
                key: 0,
                title: '',
                contents: '',
            },
        });
    }

    /**
     * @return {ReactComponent} 
     */
    render() {
        return (
            <main>
                <MemoSideMenu addMemoCard={this.addMemoCard} />
                
                <MemoArchiveList 
                    memoList={this.state.memoList}
                    // memoDataをarchiveCardから受け取るための
                    // メソッドを渡す。archiveListはそのままarchiveCardに
                    // 横流しする
                    handleMemoArchiveListClick={this.sendCardToEditor}
                    // 削除用のハンドラ
                    handleTrashIconClick={this.removeMemoCard}
                />
                {/* Editorデータが存在する場合のみ表示される */}
                <MemoEditor 
                    memoData={this.state.editorData}
                    saveCardToState={this.saveCardToState}
                />
            </main>
        );
    }
}

let dataList = [
    {key: 1, title: 'Python', contents: 'pip'},
    {key: 2, title: 'PHP', contents: 'composer'},
    {key: 3, title: 'Ruby', contents: 'gem'},
    {key: 4, title: 'Mac', contents: 'brew/port'},
    {key: 5, title: 'RedHat/CentOS', contents: 'rpm/yum'},
    {key: 6, title: 'Debian/Ubuntu', contents: 'apt'},
    {key: 7, title: 'JavaScript', contents: 'npm/yarn'},
];

render(
    <App memoList={dataList} />,
    document.getElementById('container')
);
