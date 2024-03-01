import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function StaticMap (props) {
    // const [mapImageUrl, setMapImageUrl] = useState('');

    // useEffect(() => {
    //     const fetchMapImage = async () => {
    //         try {
    //             const response = await axios.get('https://www.mapquestapi.com/staticmap/v5/map', {
    //                 params: {
    //                     key: 'SlOUxDZ6CUcntRvxLHqZPbIIjLgpjIOv',
    //                     center: '40.7128,-74.0060',
    //                     size: '600,400',
    //                     zoom: '12',
    //                 },
    //             });
    //             const response = await axios.get ('https://www.mapquestapi.com/staticmap/v5/map?key=SlOUxDZ6CUcntRvxLHqZPbIIjLgpjIOv&center=Boston,MA&size=600,400@2x')
    //             // console.log (response)      
    //             setMapImageUrl(response.data);
    //         } catch (error) {
    //             console.log('Error fetching map image:', error);
    //         }
    //     };

    //     fetchMapImage();
    // }, []);

    return (
        <div>
            {props.location && <img src={`https://www.mapquestapi.com/staticmap/v5/map?key=SlOUxDZ6CUcntRvxLHqZPbIIjLgpjIOv&center=${props.location}&size=600,400@2x`} alt= "Map" />}
        </div>
    );
};

// export default StaticMap;