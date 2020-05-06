module.exports = {
  formatData: (data, count, ratings) => {
    const pageCount = Math.ceil(count / 6);
    const response = {
      pageCount,
      reviewsCount: count,
      ratings,
      pages: [],
    };
    for (let i = 1; i <= pageCount; i += 1) {
      const page = {
        page: i,
        reviews: [],
      };
      response.pages.push(page);
    }
    let currentPage = 0;
    let pushedCount = 0;
    for (let i = 0; i < data.length; i += 1) {
      response.pages[currentPage].reviews.push(data[i]);
      pushedCount += 1;
      if (pushedCount === 6) {
        currentPage += 1;
        pushedCount = 0;
      }
    }
    return response;
  },

  findAverages: (ratings, count) => {
    let checkIn = 0, communication = 0, accuracy = 0, cleanliness = 0, value = 0, location = 0;
    for (let review of ratings) {
      checkIn += Number(review.checkin_rating)
      communication += Number(review.communication_rating)
      accuracy += Number(review.accuracy_rating)
      cleanliness += Number(review.cleanliness_rating)
      value += Number(review.value_rating)
      location += Number(review.location_rating)
    };
    const sumAvg = (checkIn + communication + accuracy + cleanliness + value + location) / (count * 6);

    let ratingAverages = {
      totalAverage: (sumAvg).toFixed(1),
      'Check-in': (checkIn / count).toFixed(1),
      Communication: (communication / count).toFixed(1),
      Accuracy: (accuracy / count).toFixed(1) ,
      Cleanliness: (cleanliness / count).toFixed(1),
      Value: (value / count).toFixed(1),
      Location: (location / count).toFixed(1),
    };
    return ratingAverages;
  },
}

