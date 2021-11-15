import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from '../../styles';
import IconBox from '../../components/IconBox';
import IconBoxList from '../../components/IconBoxList';
import {colors} from '../../theme';
import {leftIcons, rightIcons} from '../../utils/DefaultIconBoxArray';

class SpeakScreeen extends React.Component {
    constructor(props) {
        super(props);
        this.leftIcons = leftIcons;
        this.originalLeftIcons = this.leftIcons;

        this.rightIcons = rightIcons;
        this.originalRightIcons = this.rightIcons;
    }
    // todo look up calls reset
    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.gazePrediction === prevState.gazePrediction) {
    //         return;
    //     }
    //     if (this.leftIcons.length === 1 && this.rightIcons.length === 0) {
    //         if(this.state.gazePrediction === 'LEFT') {
    //             // handleIOTDevice();
    //             goBackToInitialState(key); // scan both arrays, if key matches -> toggle bg
    //             return;
    //         }
    //     }
    //     if (this.leftIcons.length === 0 && this.rightIcons.length === 1) {
    //         // same as above with right
    //     }
    //     if (this.state.gazePrediction != prevState.gazePrediction) {
    //         if (this.state.gazePrediction === 'LEFT') {
    //             const middleIndex = Math.ceil(this.leftIcons.length / 2);

    //             const newLeftIcons = this.leftIcons.slice().splice(0, middleIndex);   
    //             const newRightIcons = this.leftIcons.slice().splice(middleIndex, this.leftIcons.length);
    //             this.leftIcons = newLeftIcons;
    //             this.rightIcons = newRightIcons;
    //         }
    //     }
    // }

    render() {
        return (
            <ScrollView>
                <View style={styles.allIcons}>
                    <IconBoxList
                        styles={styles.w50, styles.iconBoxList}
                        iconBoxList={this.leftIcons}
                    />
                    <IconBoxList
                        styles={styles.w50, styles.iconBoxList, {backgroundColor: 'red'}}
                        iconBoxList={this.rightIcons}
                    />
                </View>
            </ScrollView>
        );
    }
}

export default SpeakScreeen;
