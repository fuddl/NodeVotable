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
 * Constructs the Fits object.
 *
 * @example <caption>Fits schema</caption>
 * {@lang xml}
 *  <xs:complexType name="FITS">
 *      <xs:sequence>
 *          <xs:element name="STREAM" type="Stream"/>
 *      </xs:sequence>
 *      <xs:attribute name="extnum" type="xs:positiveInteger"/>
 *  </xs:complexType>
 *
 * @param {NodeList} childNode the Fits node
 * @exports Fits
 * @augments AbstractData
 * @constructor
 * @author Jean-Christophe Malapert
 */
var Fits = function(childNode) {
    AbstractData.prototype.constructor.call(this, childNode, Constants.TAG.FITS);
    var self = this;
    this.stream = parseFits(self, childNode);
};

/**
 * Parses the Fits node.
 * @param {Fits} self Fits object          
 * @param childNode the Fits node
 * @returns {Stream} the stream
 */
var parseFits = function(self, childNode) {
    var stream;
    for(var i = 0; childNode!=null && i< childNode.childNodes.length; i++){
        var element = childNode.childNodes[i];
        if (element.nodeType == 1) {
            var nodeName = element.localName;
            if (nodeName == Constants.TAG.STREAM) {
                stream = new Definitions(element);
            } else {
                self.getCache().addWarning("unknown element "+nodeName+" in Fits node");
            }
        }
    }
    return stream;
}

Utils.inherits(AbstractData , Fits );

/**
 * Returns the Stream object.
 * @returns {!Stream} the Stream object.
 */
Fits.prototype.getStream = function(){
    return this.stream;
};

/**
 * Returns te extnum value.
 * @returns {!String} the extnum value.
 */
Fits.prototype.extnum = function(){
    return this.attributes['extnum'];
};

module.exports = Fits;