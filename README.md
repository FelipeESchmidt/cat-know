# CATKNOW

I created a cat encyclopedia web app with two main pages, powered by The Cat API. The first page displays an infinite scrolling list of cat images and their names. When I click on a specific cat image, a second page opens with more detailed information about that cat.

## Responsiveness

- On desktop, I show a grid with 4 columns.
- On tablets, I show a 2-column grid.
- On mobile devices, I show a single-column layout.

## API

I'm using The Cat API, which is documented here:  
https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t

API endpoints I used:

- Fetch images list: `https://api.thecatapi.com/v1/images/search`
- Fetch categories list: `https://api.thecatapi.com/v1/categories`
- Get specific cat: `https://api.thecatapi.com/v1/images/<ID>`

On the first page, users can filter cats by **CATEGORY** by clicking on the filter chips.

## Design

Here’s a Figma link with design mockups that I used as a reference. I followed the design loosely and felt free to make adjustments as needed:  
[FIGMA](https://www.figma.com/design/O59cTYodflm2C6VozQRV9v/Untitled?node-id=0-1&t=r8jUUjbanMo3Jrf5-1)

## Technology Stack

I built this project using **Next.js**, with support for either the `pages` or `app` router. I chose **TypeScript** as the development language.  
The code is committed to a GitHub repository.
