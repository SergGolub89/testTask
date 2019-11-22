import React from 'react';
import data from './treeStructure';
import SortableTree, { changeNodeAtPath, walk } from 'react-sortable-tree';
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
            title: obj[prop].split('-').pop(),
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
    const getNodeKey = ({ node }) => JSON.stringify(node);

    return (
      <div className="App">
        <SortableTree
          treeData={leftTree}
          onChange={(leftTree) => this.setState({ leftTree })}
          getNodeKey={getNodeKey}
          generateNodeProps={({ node, path }) => {
            return {
              style: { color: `${this.changeColor(node.subtitle)}`},
              title: `${node.title}`,
              onClick: () => {
                const title = node.title;
                const tabIndex = path[0].slice(0, 20);
                let mirrorNode = null;
                walk({
                  treeData: rightTree,
                  getNodeKey,
                  callback: (node) => {
                    if (node.node.title === title && node.path[0].startsWith(tabIndex)) {
                      mirrorNode = node.node;
                    }
                  },
                  ignoreCollapsed: true,
                })

                if (mirrorNode) {
                  mirrorNode.expanded = !mirrorNode.expanded;
                }

                this.setState(state => ({
                  leftTree: changeNodeAtPath({
                    treeData: state.leftTree,
                    path,
                    getNodeKey,
                    newNode: { ...node, expanded: !node.expanded },
                  }),
                }));
              },
            };
          }}
        />
        <SortableTree
          treeData={rightTree}
          onChange={(rightTree) => this.setState({ rightTree })}
          getNodeKey={getNodeKey}
          generateNodeProps={({ node, path }) => {
            return {
              style: { color: `${this.changeColor(node.subtitle)}`},
              title: `${node.title}`,
              onClick: () => {
                const title = node.title;
                const tabIndex = path[0].slice(0, 20);
                let mirrorNode = null;
                walk({
                  treeData: leftTree,
                  getNodeKey,
                  callback: (node) => {
                    if (node.node.title === title && node.path[0].startsWith(tabIndex)) {
                      mirrorNode = node.node;
                    }
                  },
                  ignoreCollapsed: true,
                })

                if (mirrorNode) {
                  mirrorNode.expanded = !mirrorNode.expanded;
                }

                this.setState(state => ({
                  rightTree: changeNodeAtPath({
                    treeData: state.rightTree,
                    path,
                    getNodeKey,
                    newNode: { ...node, expanded: !node.expanded },
                  }),
                }));
              },
            };
          }}
        />
      </div>
    );
  }
}

export default App;
