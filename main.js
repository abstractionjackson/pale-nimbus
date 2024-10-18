import "./style.scss";
import { defineCustomElement } from "./src/utils";
import BusinessCard from "./src/BusinessCard";

defineCustomElement("business-card", BusinessCard);
