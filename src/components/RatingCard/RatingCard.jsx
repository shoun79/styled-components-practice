import { H1, P, RatingCardWrapper, RatingIconBox, StarButton, SubmitButton } from "./RatingCard.Styles";
import star from '../../assets/icon-star.svg'
import { useState } from "react";
const RatingCard = () => {
    const [seletedRating, setSeletedRating] = useState(0);

    return (
        <RatingCardWrapper>
            <RatingIconBox>
                <img src={star} alt="" />
            </RatingIconBox>
            <H1>How did we do?</H1>
            <P>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering
            </P>
            {
                [1, 2, 3, 4, 5].map((item, i) => <StarButton as='button'
                    onClick={() => setSeletedRating(item)}
                    seleted={seletedRating === i + 1}
                    key={i}>{item}</StarButton>)
            }
            <SubmitButton>Submit</SubmitButton>
        </RatingCardWrapper>
    );
};

export default RatingCard;