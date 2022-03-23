import CategoryDirectory from "../../components/category-directory/category-directory.component";

const Home = () => {
  const row1Categories = [
    {
      id: 1,
      title: "TEES",
      imageUrl:
        "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgzfHx0b3AlMjB3ZWFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "JACKETS",
      imageUrl:
        "https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGFwcGFyZWwlMjBqYWNrZXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "JEANS",
      imageUrl:
        "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const row2Categories = [
    {
      id: 4,
      title: "MEN",
      imageUrl:
        "https://images.unsplash.com/photo-1528977695568-bd5e5069eb61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxtZW4lMjBncm91cCUyMGhvcml6b250YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      title: "WOMEN",
      imageUrl:
        "https://images.unsplash.com/photo-1556159992-e189f8e50104?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const row3Categories = [
    {
      id: 6,
      title: "ACCESSORIES",
      imageUrl:
        "https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFjY2Vzc29yeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 7,
      title: "FOOTWEAR",
      imageUrl:
        "https://images.unsplash.com/photo-1518112390430-f4ab02e9c2c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzMjczMjMyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 8,
      title: "BEAUTY",
      imageUrl:
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
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
