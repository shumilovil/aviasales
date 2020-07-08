import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import style from './RangeSlider.module.css'

const useStyles = makeStyles({
  root: {
    width: 190,
  },
});



function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 300]);

  useEffect(() => {
    console.log('Useeffect');
    props.chooseDuration({ min: value[0], max: value[1] })
  }, [value])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={style.rangeSlider}>
      <div className={classes.root}>
  <div className={style.duration}>Общее время, ч: от {value[0]} до {value[1]}</div>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          max='300'
        />
      </div>
    </div>
  );
}