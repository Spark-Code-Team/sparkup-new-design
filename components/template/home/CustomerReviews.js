"use client";
import React from "react";
import TitlePages from "../../module/TitlePages";
import CardCustomerReview from "../../module/CardCustomerReview";
import CustomSwiper from "@/components/elements/CustomSwiper";
import reviews from "@/components/constants/reviews";

const CustomerReviews = () => {
  return (
    <>
      <div className="block">
        <TitlePages title="رضایت مشتریان" />
      </div>

      <div className="w-full mt-6">
        <CustomSwiper>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-row items-center justify-center"
            >
              <CardCustomerReview {...review} />
            </div>
          ))}
        </CustomSwiper>
      </div>
    </>
  );
};

export default CustomerReviews;
