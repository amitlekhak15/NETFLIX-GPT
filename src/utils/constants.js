export const logo="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const BACKBROUND="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"
export const USERICON="https://icons.iconarchive.com/icons/martin-berube/people/256/kid-icon.png"
export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  };
export const IMG_CDN="https://image.tmdb.org/t/p/w500";
export const SUPPORTED_LANGUAGES=[{identifier:"en" ,name:"English"},{identifier:"hindi" ,name:"Hindi"},{identifier:"spanish" ,name:"Spanish"}]
export const GPT_KEY=process.env.REACT_APP_GPT_KEY