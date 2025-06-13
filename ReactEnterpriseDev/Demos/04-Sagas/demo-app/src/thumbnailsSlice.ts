import { createSlice } from '@reduxjs/toolkit'

interface Thumbnail {
  url: string,
  large: boolean
}

const thumbnailsSlice = createSlice({
  
  name: 'thumbnails',
  
  initialState: new Array<Thumbnail>(),
  
  reducers: {
    
    setThumbnails: (state, action) => {
      // Note: action.payload is a string[] of URLs.
      let thumbnails = action.payload.map((u: any) => {
          return {url: u, large: false}
       })    
       state.push(...thumbnails)
    },

    clearThumbnails: (state) => {
       state.length = 0
    },

    toggleImageSize: (state, action) => {
      // Note: action.payload is a string URL.
      const thumbnail = state.find(t => t.url === action.payload)
      if (thumbnail) {
        thumbnail.large = ! thumbnail.large
      }
    }
  }
})

export default thumbnailsSlice