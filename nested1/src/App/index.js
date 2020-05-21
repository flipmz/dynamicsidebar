import React, { Component } from "react";

import css from "./style.module.css";
import BootstrapMenu from "../BootstrapMenu";
import NavbarIterated from "../NavbarIterated";
import Navbar from "../Navbar";
import NavTest from "../NavTest";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [
        {
          id: 1,
          name: "Танилцуулга",
          url: "",
          order: 100,
          type: 2,
          is_active: true,
          parent_id: 0,
        },
        {
          id: 9,
          name: "Терроризмтой тэмцэх зөвлөл",
          url: "",
          order: 110,
          type: 3,
          is_active: true,
          parent_id: 1,
        },
        {
          id: 10,
          name: "Терроризмто тэмцэх зөвлөлийн ажлын алба",
          url: "",
          order: 120,
          type: 3,
          is_active: true,
          parent_id: 1,
        },
        {
          id: 2,
          name: "Хууль эрх зүй",
          url: "",
          order: 200,
          type: 2,
          is_active: true,
          parent_id: 0,
        },
        {
          id: 11,
          name: "Нэгдэн орсон ОУ-ын гэрээ",
          url: "",
          order: 210,
          type: 3,
          is_active: true,
          parent_id: 2,
        },
        {
          id: 12,
          name: "Хоёр талын гэрээ хэлэлцээр",
          url: "",
          order: 220,
          type: 3,
          is_active: true,
          parent_id: 2,
        },
        {
          id: 13,
          name: "Хууль",
          url: "",
          order: 230,
          type: 3,
          is_active: true,
          parent_id: 2,
        },
        {
          id: 14,
          name: "Дүрэм",
          url: "",
          order: 240,
          type: 3,
          is_active: true,
          parent_id: 2,
        },
        {
          id: 15,
          name: "Журам",
          url: "",
          order: 250,
          type: 3,
          is_active: true,
          parent_id: 2,
        },
        {
          id: 16,
          name: "Гарын авлага",
          url: "",
          order: 260,
          type: 3,
          is_active: true,
          parent_id: 2,
        },
        {
          id: 3,
          name: "Мэдээ мэдээлэл",
          url: "",
          order: 300,
          type: 2,
          is_active: true,
          parent_id: 0,
        },
        {
          id: 17,
          name: "Гадаад дотоод мэдээ",
          url: "",
          order: 310,
          type: 3,
          is_active: true,
          parent_id: 3,
        },
        {
          id: 18,
          name: "Сургалт, дадлага",
          url: "",
          order: 320,
          type: 3,
          is_active: true,
          parent_id: 3,
        },
        {
          id: 19,
          name: "Дүрс бичлэг",
          url: "",
          order: 330,
          type: 3,
          is_active: true,
          parent_id: 3,
        },
        {
          id: 4,
          name: "Дүн шинжилгээ",
          url: "",
          order: 400,
          type: 2,
          is_active: true,
          parent_id: 0,
        },
        {
          id: 5,
          name: "Терроризмын нөхцөл байдал",
          url: "",
          order: 500,
          type: 2,
          is_active: true,
          parent_id: 0,
        },
        {
          id: 20,
          name: "МУ-ын терроризмийн нөхцөл байдал",
          url: "",
          order: 510,
          type: 3,
          is_active: true,
          parent_id: 5,
        },
        {
          id: 21,
          name: "МУ МУТС, ЗДС эрсдлийн үнэлгээ",
          url: "",
          order: 520,
          type: 3,
          is_active: true,
          parent_id: 5,
        },
        {
          id: 6,
          name: "Хориг арга хэмжээ",
          url: "",
          order: 600,
          type: 2,
          is_active: true,
          parent_id: 0,
        },
        {
          id: 7,
          name: "Салбар зөвлөл",
          url: "",
          order: 700,
          type: 2,
          is_active: true,
          parent_id: 0,
        },
        {
          id: 8,
          name: "Холбоо барих",
          url: "",
          order: 800,
          type: 2,
          is_active: true,
          parent_id: 0,
        },
      ],
      searchField: "",
    };
  }
  onSearchChanged = (event) => {
    this.setState({ searchField: event.target.value });
  };
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ robots: data }));
  // }
  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((el) =>
      el.name.toLowerCase().includes(searchField)
    );
    return (
      <div className={css.App}>
        <h1>Hello Class Component</h1>
        <BootstrapMenu onSearch={this.onSearchChanged} />
        <NavbarIterated />
        {/* <Navbar /> */}
        <NavTest />
      </div>
    );
  }
}

export default App;
