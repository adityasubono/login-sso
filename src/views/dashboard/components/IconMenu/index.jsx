import React from "react";
import { Row, Col, Icon } from "antd";
import "./index.less";


const iconMenu = [
    {
        type: "Account Setting",
        icon: "user",
        num: 102400,
        color: "#40c9c6",
    },
    {
        type: "E-Library",
        icon: "book",
        num: 81212,
        color: "#36a3f7",
    },
    {
        type: "Admission",
        icon: "snippets",
        num: 9280,
        color: "#f4516c",
    },
    {
        type: "Student",
        icon: "user",
        num: 13600,
        color: "#f6ab40",
    },
    {
        type: "Teacher",
        icon: "user",
        num: 13600,
        color: "#297d3b",
    },
    {
        type: "Reporting",
        icon: "pie-chart",
        num: 13600,
        color: "#db40f6",
    },
    {
        type: "Finance & General Affair",
        icon: "account-book",
        num: 13600,
        color: "#073b2f",
    },
    {
        type: "School Management",
        icon: "shop",
        num: 13600,
        color: "#116842",
    },
    {
        type: "Alumni",
        icon: "skin",
        num: 13600,
        color: "#668232",
    },
    {
        type: "Parent Forum",
        icon: "user",
        num: 13600,
        color: "#8e1848",
    },
    {
        type: "Finance & General Affair",
        icon: "container",
        num: 13600,
        color: "#f6ab40",
    },
];

const IconMenu = () => {
    return (
        <div className="icon-container">
            <Row gutter={40} className="icon-group">
                {iconMenu.map((chart, i) => (
                    <Col
                        key={i}
                        lg={6}
                        sm={12}
                        xs={12}
                        className="card-panel-col"
                    >
                        <div className="card-panel">
                            <div className="card-panel-icon-wrapper">
                                <Icon
                                    className={chart.type}
                                    style={{ fontSize: 55, color: chart.color }}
                                    type={chart.icon}
                                />
                            </div>
                            <div className="card-panel-description">
                                <p className="card-panel-text">{chart.type}</p>
                            </div>
                        </div>

                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default IconMenu;
