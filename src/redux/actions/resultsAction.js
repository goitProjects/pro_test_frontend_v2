import { createAction } from "@reduxjs/toolkit";

const resultsRequest = createAction("results/resultsRequest");
const resultsSuccess = createAction("results/resultsSuccess");
const resultsError = createAction("results/resultsError");

const resetResults = createAction("results/resetResults");

export { resultsRequest, resultsSuccess, resultsError, resetResults };

// const _Request = createAction("@results/_Requestt");
// const _Success = createAction("@results/_Success");
// const _Error = createAction("@results/_Errror");

// export { _Error, _Success, _Request };
