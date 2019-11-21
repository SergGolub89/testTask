import React from 'react';
import data from './treeStructure';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

class App extends React.Component {
  state = {
    leftTree: [],
    rightTree: [],
  }

  changeData = (obj) => {
    const result = [];

    for (let prop in obj) {
      const status = obj[prop].status;
      delete obj[prop].status;

      switch (typeof obj[prop]) {
        case 'object':
          if (obj[prop].name) {
            result.push({
              title: obj[prop].name.split('-').pop(),
              subtitle: status,
              expanded: false,
            });
          } else {
            result.push({
              title: prop,
              subtitle: status,
              expanded: false,
              children: this.changeData(obj[prop]),
            })
          }
          break;
        case 'string':
          result.push({
            title: obj[prop].split('-').pop()
          });
          break;
        default:
          return '';
      }
    }

    return result;
  }

  componentDidMount() {
    const leftData = this.changeData(data.left.nodes);
    const rightData = this.changeData(data.right.nodes);

    this.setState({
      leftTree: leftData,
      rightTree: rightData,
    })
  }

  changeColor = (prop) => {
    switch(prop) {
      case 'absent': return 'red';
      case 'modified': return '#FFD700';
      case 'new': return 'green';
      default: return '';
    }
  }

  render() {
    const { leftTree, rightTree } = this.state;
    const getNodeKey = ({ node }) => node.title;

    return (
      <div className="App">
        <SortableTree
          treeData={leftTree}
          onChange={(leftTree) => this.setState({ leftTree })}
          getNodeKey={getNodeKey}
        />
        <SortableTree
          treeData={rightTree}
          onChange={(rightTree) => this.setState({ rightTree })}
          getNodeKey={getNodeKey}
          generateNodeProps={({ node, path }) => {
            return {
              style: { color: `${this.changeColor(node.subtitle)}`},
              title: `${node.title}`,
            };
          }}
        />
      </div>
    );
  }
}

export default App;
