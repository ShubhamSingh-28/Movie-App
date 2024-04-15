import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY= import.meta.env.VITE_API_KEY;


export const fetchDataDays = createAsyncThunk('data/fetchDataDays',async()=>{
      try {
          const response = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
          const data = response.data;
          return data;
      } catch (error) {
          console.error(error);
      }
})

export const fetchDataWeeks = createAsyncThunk('data/fetchDataWeeks',async()=>{
      try {
          const response = await axios(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`);
          const data = response.data;
          return data;
      } catch (error) {
          console.error(error);
      }
})

export const fetchDataTopRated = createAsyncThunk('data/fetchDataTopRated',async()=>{
  try {
    const response = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
    const data = response.data;
    return data;
} catch (error) {
    console.error(error);
}
})

export const fetchDataPopular = createAsyncThunk('data/fetchDataPopular',async()=>{
  try {
    const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    const data = response.data;
    return data;
} catch (error) {
    console.error(error);
}
})

export const fetchDataPopularTv = createAsyncThunk('data/fetchDataPopularTv',async()=>{
  try {
    const response = await axios(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`);
    const data = response.data;
    return data;
} catch (error) {
    console.error(error);
}
})

export const fetchDataTopRatedTv = createAsyncThunk('data/fetchDataTopRatedTv',async()=>{
  try {
    const response = await axios(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`);
    const data = response.data;
    return data;
} catch (error) {
    console.error(error);
}
})

export const fetchDataSearch = createAsyncThunk('data/fetchDataSearch',async({query})=>{
  try {
    const response = await axios(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`);
    const data = response.data;
    return data;
} catch (error) {
    console.error(error);
}
})


export const fetchDataRecommendation = createAsyncThunk('data/fetchDataRecommendation',async({mediaType, id})=>{
    try {
      const response = await axios(`https://api.themoviedb.org/3/${mediaType}/${id}/recommendations?api_key=${API_KEY}`);
      const data = response.data;
      return data;
  } catch (error) {
      console.error(error);
  }
  })

export const fetchDataCast = createAsyncThunk('data/fetchDataCast',async({mediaType, id})=>{
    try {
      const response = await axios(`https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=${API_KEY}`);
      const data = response.data;
      //console.log(data);
      return data;
  } catch (error) {
      console.error(error);
  }
  })

  export const fetchDataVideos = createAsyncThunk('data/fetchDataVideos',async({mediaType, id})=>{
    try {
      const response = await axios(`https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=${API_KEY}`);
      const data = response.data;
      //console.log(data);
      return data;
  } catch (error) {
      console.error(error);
  }
  })

  export const fetchDataDetails = createAsyncThunk('data/fetchDataVideos',async({mediaType, id})=>{
    try {
      const response = await axios(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${API_KEY}`);
      const data = response.data;
      //console.log(data);
      return data;
  } catch (error) {
      console.error(error);
  }
  })
  

const dataSlice = createSlice({
    name:"data",
    initialState:{
        dataa:[],    
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchDataDays.fulfilled,(state,action)=>{
            state.dataa=action.payload;
        }).addCase(fetchDataTopRated.fulfilled, (state, action) => {
            state.dataa = action.payload; // Assuming action.payload contains the data
        })
        .addCase(fetchDataPopular.fulfilled, (state, action) => {
            state.dataa = action.payload; // Assuming action.payload contains the data
        }).addCase(fetchDataCast.fulfilled,(state,action)=>{
            state.dataa = action.payload;
        })
    }
})

export default dataSlice.reducer;