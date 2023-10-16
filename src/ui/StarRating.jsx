/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from "react";

export const StarRatingContext = createContext(); // we used contextApi to avoid propdrilling

export default function StarRating({
  defaultState, // the number of the full stars
  emptyColor, // the empty color of star
  fillColor, // the full color of star
  stroke, // the color of star border
  height,
  width,
  labelText, // the text of the star rating
  maxValue, // the number of total stars (full + empty)
  onChangeHover,
  onChangeValue,
  readOnly, // if its true the user can not edit the star rating
}) {
  const [rating, setRating] = useState(defaultState);
  const [hover, setHover] = useState(null);

  const setRatingFn = (value) => {
    if (readOnly) return;

    setRating(value);
    onChangeValue(value);
  };

  const setHoverFn = (value) => {
    if (readOnly) return;

    setHover(value);
    onChangeHover(value);
  };

  return (
    <>
      <StarRatingContext.Provider
        value={{
          emptyColor,
          fillColor,
          stroke,
          height,
          hover,
          labelText,
          rating,
          setHover: setHoverFn,
          setRating: setRatingFn,
          width,
          maxValue,
        }}
      >
        <div className="flex text-lg font-semibold dark:text-gray-200 items-center">
          <StarsList />
          <StarRatingLabel />
        </div>
      </StarRatingContext.Provider>
    </>
  );
}

StarRating.defaultProps = {
  defaultState: 0,
  emptyColor: "white",
  fillColor: "#c5e41a",
  stroke: "#c5e41a",
  height: 53,
  labelText: (value) => `${value}.0/5.0`,
  maxValue: 5,
  onChangeHover: () => {},
  onChangeValue: () => {},
  readOnly: false,
  width: 53,
};

function StarRatingLabel() {
  const { rating, labelText } = useContext(StarRatingContext);

  return <div className="pb-[5px]">{labelText(rating)}</div>;
}

function StarsList() {
  const { maxValue } = useContext(StarRatingContext);

  return (
    <div className="flex items-end">
      {[...Array(maxValue)].map((star, index) => {
        const value = index + 1;

        return <Star key={index} value={value} />;
      })}
    </div>
  );
}

function Star({ value }) {
  const {
    emptyColor,
    fillColor,
    stroke,
    height,
    hover,
    rating,
    setHover,
    setRating,
    width,
  } = useContext(StarRatingContext);

  return (
    <div
      className="star"
      onClick={() => setRating(value)}
      onMouseEnter={() => setHover(value)}
      onMouseLeave={() => setHover(null)}
    >
      <svg
        data-rating={value}
        fill={value <= (hover || rating) ? fillColor : emptyColor} // if the value <= (rating or hover) then fill the star with the given color else empty
        height={height}
        viewBox="0 0 25 25"
        width={width}
        stroke={stroke}
        strokeWidth="2"
      >
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
    </div>
  );
}
