import { takeEvery, put, all } from 'redux-saga/effects'
import counterSlice from './counterSlice'
import thumbnailsSlice from './thumbnailsSlice'

// ------------------------------------------------------------------------------------------
// Sagas for Counter component.
// ------------------------------------------------------------------------------------------

function * watchIncrementAsync() {
  yield takeEvery('incrementAsync', doIncrementAsync)
}

function * doIncrementAsync() {
  for (let i = 0; i < 10; i++) {
    yield delay(1000)
    yield put(counterSlice.actions.increment())
  }
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))  // Promise is resolved after timeout
}


// ------------------------------------------------------------------------------------------
// Sagas for Thumbnails component.
// ------------------------------------------------------------------------------------------

function * watchGetThumbnailUrlsAsync() {
  yield takeEvery('getThumbnailsAsync', doGetThumbnailUrlsAsync)
}

function * doGetThumbnailUrlsAsync() : any {
	try {
		const response = yield window.fetch('http://localhost:8080/api/thumbnailUrls')
    const urlsData = yield response.json()
    yield put(thumbnailsSlice.actions.setThumbnails(urlsData))
	} 
  catch (e) {
		console.log("doGetThumbnailUrlsAsync() error: " + e)
	}
}


// ------------------------------------------------------------------------------------------
// Root saga.
// ------------------------------------------------------------------------------------------
export default function * myRootSaga() {
  yield all([
    watchIncrementAsync(),
    watchGetThumbnailUrlsAsync()
  ])
}