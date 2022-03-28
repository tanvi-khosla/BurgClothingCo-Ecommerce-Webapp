import CategoryDirectory from "../../components/category-directory/category-directory.component";

const Home = () => {
  const row1Categories = [
    {
      id: 1,
      title: "TEES",
      imageUrl:
        "https://images.unsplash.com/photo-1530558215369-ba361d8734f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRzaGlydHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "JACKETS",
      imageUrl:
        "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w4Njk2MzMzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "JEANS",
      imageUrl:
        "https://media.istockphoto.com/photos/close-up-of-a-woman-on-mom-jeans-picture-id1299034112?b=1&k=20&m=1299034112&s=170667a&w=0&h=eyO1rctZ7Sv8RGZRL6CIx0_rPkRB_Ti1BuOu6B52r-E=",
    },
  ];

  const row2Categories = [
    {
      id: 4,
      title: "MEN",
      imageUrl:
        "https://images.unsplash.com/photo-1584316712724-f5d4b188fee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbiUyMGNsb3RoaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      title: "WOMEN",
      imageUrl:
        "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcGFyZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const row3Categories = [
    {
      id: 6,
      title: "ACCESSORIES",
      imageUrl:
        "https://images.unsplash.com/photo-1518912217224-3b1ae276c89e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGFjY2Vzc29yaWVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 7,
      title: "FOOTWEAR",
      imageUrl:
        "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 8,
      title: "BEAUTY",
      imageUrl:
        "https://media.istockphoto.com/photos/-picture-id939061864?b=1&k=20&m=939061864&s=170667a&w=0&h=xDxtjRf_WEU9Vm6UqFXF-8d3ARuHQhWxzV1FrJeIYR4=",
    },
  ];

  return (
    <CategoryDirectory
      row1Categories={row1Categories}
      row2Categories={row2Categories}
      row3Categories={row3Categories}
    />
  );
};

export default Home;
