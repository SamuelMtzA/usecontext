import { useEffect, useRef, useState } from "react";

export const useFetch = (url = '') => {
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    //cuando se desmonte, se cambie el valor de isMounted
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    //estado inicial al momento de que se cambie el url
    setState({ loading:false, error: null, data:null});

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
          if(isMounted.current){
            setState({ 
            loading:false,
            error: null,
            data
            });
          }else{
            console.log('no se ejecuta setstate');
          }

      })
      .catch((err) => console.error(err));
    /* const fetchData = async(url) => 
    {
      try {
        const resp = await fetch(url);
        const { data } = await resp.json();
        const apiData = setState({
          loading: false,
          error: null,
          data
        });
        return apiData;
      }
      catch(err){
        return err;
      }
    };
    fetchData(); */
  }, [url]);

  return state;

};
