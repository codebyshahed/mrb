const loadData = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayUsers(data));
};

/**
 * object structure -->>
 * 
 * {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
            "lat": "-14.3990",
            "lng": "-120.7677"
        }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
    }
}
 */

const displayUsers = (users) => {
  // get the container
  const usersContainer = document.getElementById("cards");
  // empty container
  usersContainer.innerHTML = "";

  users.forEach((user) => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="user_card">
          <!-- image and text -->
          <div class="image_and_text">
            <div class="">
              <img src="./image.png" class='dp' alt="dp" />
            </div>
            <div class="">
              <h3>${user.name}</h3>
              <div class="badge_and_username">
                <p>@${user.username.toLowerCase()}</p>
                <span><i class="fa-solid fa-circle-check"></i></span>
              </div>
            </div>
          </div>
          <!-- address -->
          <div class="address">
            <div class="">
              <p>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            </div>
            <div class="address_details">
              <strong>Geo:</strong>
              <p>${user.address.geo.lat}, ${user.address.geo.lng}</p>
            </div>
          </div>
          <!-- contact with email -->
          <div class="address_details">
            <strong>Email:</strong>
            <p>${user.email.toLowerCase()}</p>
          </div>
        </div>`;

    // add
    usersContainer.appendChild(div);
  });
};
