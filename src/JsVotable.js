/*******************************************************************************
 * Copyright 2016-2019 - Jean-Christophe Malapert
 *
 * This file is part of JsVotable.
 *
 * JsVotable is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * JsVotable is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with JVotable.  If not, see <http://www.gnu.org/licenses/>.
 ******************************************************************************/
/**
 * @version [VERSION_API]
 */
const Votable = require("./votable");
const Binary = require("./binary");
const Binary2 = require("./binary2");
const Coosys = require("./coosys");
const Data = require("./data");
const Definitions = require("./definitions");
const Description = require("./description");
const Field = require("./field");
const Fieldref = require("./fieldref");
const Fits = require("./fits");
const Group = require("./group");
const Info = require("./info");
const Link = require("./link");
const Max = require("./max");
const Min = require("./min");
const Option = require("./option");
const Param = require("./param");
const Paramref = require("./paramref");
const Resource = require("./resource");
const Stream = require("./stream");
const Table = require("./table");
const TableData = require("./tabledata");
const Td = require("./td");
const Tr = require("./tr");
const Values = require("./values");
const Constants = require("./constants");

var JsVotable = {};

JsVotable.Constants = Constants;
JsVotable.Votable = Votable;
JsVotable.Binary = Binary;
JsVotable.Binary2 = Binary2;
JsVotable.Coosys = Coosys;
JsVotable.Data = Data;
JsVotable.Definitions = Definitions;
JsVotable.Description = Description;
JsVotable.Field = Field;
JsVotable.Fieldref = Fieldref;
JsVotable.Fits = Fits;
JsVotable.Group = Group;
JsVotable.Info = Info;
JsVotable.Link = Link;
JsVotable.Max = Max;
JsVotable.Min = Min;
JsVotable.Option = Option;
JsVotable.Param = Param;
JsVotable.Paramref = Paramref;
JsVotable.Resource = Resource;
JsVotable.Stream = Stream;
JsVotable.Table = Table;
JsVotable.TableData = TableData;
JsVotable.Td = Td;
JsVotable.Tr = Tr;
JsVotable.Values = Values;
JsVotable.version = {
    major : 2,
    minor : 0,
    patch : 2,
    date : "2019-02-15",
    toString : function () {
        return this.major+ "." + this.minor + "." + this.patch;
    }
};

module.exports = JsVotable;
