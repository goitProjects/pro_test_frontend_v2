import React, { Component } from "react";

import { Chart } from "react-google-charts";
import styles from "./Diagram.module.scss";

class Diagram extends Component {
  state = { percent: null };

  componentDidUpdate(_, prevProps) {
    const percent = this.props.percent.slice(0, -1);

    if (percent !== prevProps.percent) {
      this.setState({ percent });
    }
  }

  render() {
    const { lang, result, resultDescr } = this.props;

    return this.state.percent === "0%" ? (
      <div className={styles.container}>
        <div className={styles.answers}>
          <p className={styles.textAnswers}>
            {resultDescr.correct[lang]} -{" "}
            <span className={styles.textAnswersNumber}>0</span>
          </p>
          <p className={styles.textAnswers}>
            {resultDescr.total[lang]} -{" "}
            <span className={styles.textAnswersNumber}>12</span>
          </p>
        </div>
      </div>
    ) : (
      <div className={styles.container}>
        <Chart
          className={styles.chart}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Task", "Hours per Day"],
            [`${30}%  ${result.correct[lang]} `, 30],
            [`${95}%  ${result.incorrect[lang]} `, 95],
          ]}
          options={{
            pieStartAngle: 100,
            pieSliceText: "none",
            slices: {
              0: { color: "#FF6B01" },
              1: { color: "#D7D7D7" },
            },
            chartArea: { left: 100, top: 10, width: "90%", height: "90%" },
            backgroundColor: "#f5f6fb",
          }}
          rootProps={{ "data-testid": "1" }}
        />
        <div className={styles.answers}>
          <p className={styles.textAnswers}>
            {resultDescr.correct[lang]} -{" "}
            <span className={styles.textAnswersNumber}>
              {Number(Math.round((this.state.percent / 100) * 12))}
            </span>
          </p>
          <p className={styles.textAnswers}>
            {resultDescr.total[lang]} -{" "}
            <span className={styles.textAnswersNumber}>12</span>
          </p>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   percent: state.resultsOfTest.results.result,
// });

// export default connect(mapStateToProps)(Diagram);
export default Diagram;
