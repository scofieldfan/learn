/*
* @Author: fanzhang
* @Date:   2016-11-03 20:45:36
* @Last Modified by:   fanzhang
* @Last Modified time: 2016-11-03 20:55:29
*/

'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(self){
    //auto render template file index_index.html
    return this.display();
  }
}