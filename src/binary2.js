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

const Utils = require("./utils");
const Stream = require("./stream");
const AbstractData = require("./abstractData");
const Constants = require("./constants");

/**
 * Constructs the Binary2 object.
 *
 * @example <caption>Binary2 schema</caption>
 * {@lang xml}     
 *  <xs:complexType name="Binary2">
 *      <xs:sequence>
 *          <xs:element name="STREAM" type="Stream"/>
 *      </xs:sequence>
 *  </xs:complexType>
 *
 * @param {NodeList} childNode the Binary2 node
 * @exports Binary2
 * @augments AbstractData
 * @constructor
 * @author Jean-Christophe Malapert
 */
var Binary2 = function(childNode) {
    AbstractData.prototype.constructor.call(this, childNode, Constants.TAG.BINARY2);
    var self = this;
    this.stream = parseBinary2(self, childNode);
};

/**
 * Parses the Binary2 node.
 * @param {Binary2} self Binary2 object     
 * @param {NodeList} childNode the Binary node
 * @returns {!String} the Stream
 */
var parseBinary2 = function(self, childNode) {
    var stream;
    for(var i = 0; childNode!=null && i< childNode.childNodes.length; i++){
        var element = childNode.childNodes[i];
        if (element.nodeType == 1) {
            var nodeName = element.localName;
            if (nodeName == Constants.TAG.STREAM) {
                stream = new Definitions(element);
            } else {
                self.getCache().addWarning("unknown element "+nodeName+" in Binary2 node");
            }
        }
    }
    return stream;
};

Utils.inherits(AbstractData , Binary2 );

/**
 * Returns the Stream object.
 * @returns {!Stream} the Stream object
 */
Binary2.prototype.getStream = function(){
    return this.stream;
};

module.exports = Binary2;