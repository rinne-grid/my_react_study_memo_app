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
        this.state = {
            memoList: this.props.memoList,
        };

        this.sendCardToEditor = this.sendCardToEditor.bind(this);
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
     * @return {ReactComponent} 
     */
    render() {
        return (
            <main>
                <MemoSideMenu />
                
                <MemoArchiveList 
                    memoList={this.state.memoList}
                    // memoDataをarchiveCardから受け取るための
                    // メソッドを渡す。archiveListはそのままarchiveCardに
                    // 横流しする
                    handleMemoArchiveListClick={this.sendCardToEditor}
                />
                {/* Editorデータが存在する場合のみ表示される */}
                <MemoEditor memoData={this.state.editorData}/>
            </main>
        );
    }
}

let dataList = [
    {key: 1, title: 'Python', contents: 'pip'},
    {key: 2, title: 'JavaScript', contents: 'npm'},
    {key: 3, title: 'PHP', contents: 'composer'},
    {key: 4, title: 'Ruby', contents: 'gem'},
    {key: 5, title: 'Mac', contents: 'brew/port'},
    {key: 6, title: 'RedHat/CentOS', contents: 'rpm/yum'},
    {key: 7, title: 'Debian/Ubuntu', contents: 'apt'},
    {key: 8, title: 'Windows', contents: 'chocolatey'},
];

render(
    <App memoList={dataList} />,
    document.getElementById('container')
);
