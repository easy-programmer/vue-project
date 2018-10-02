<template>
  <div>
  <p align="left">
    (2018-09-20) 설치 : npm install vuetable-2 --save-dev<br/>
    (2018-09-21) Data Binding(?)<br/>
    (2018-09-21) Beginner Guide : <a href="https://joshua1988.github.io/web_dev/vuejs-tutorial-for-beginner/">https://joshua1988.github.io/web_dev/vuejs-tutorial-for-beginner/</a><br/>
    (2018-10-02) Field Fomatting / Grid Paging >>> [Formmating 설치] :  npm install --save accounting / npm install --save moment
    <br/>
  </p> 
  <vuetable ref="vuetable"
    api-url="https://vuetable.ratiw.net/api/users"
    :fields="fields"
    pagination-path=""
    @vuetable:pagination-data="onPaginationData"
  ></vuetable>
  <vuetable-pagination ref="pagination"
    @vuetable-pagination:change-page="onChangePage"
  ></vuetable-pagination>
  </div>
</template>


<script>

import Vuetable from 'vuetable-2/src/components/Vuetable'
// import accounting from 'accounting'  // npm install --save accounting
// import moment from 'moment'  // npm install --save moment
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'

export default {
  components: {
    Vuetable,
    VuetablePagination
  },
  data () {
    return {
      fields: [
        'name', 'email',
        {
          name: 'birthdate',
          titleClass: 'center aligned',
          dataClass: 'center aligned',
          callback: 'formatDate|DD-MM-YYYY'
        },
        {
          name: 'nickname',
          callback: 'allcap'
        },
        {
          name: 'gender',
          titleClass: 'center aligned',
          dataClass: 'center aligned',
          callback: 'genderLabel'
        },
        {
          name: 'salary',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
          callback: 'formatNumber'
        }       
      ]
    }
  },
  methods: {
    // Formatting function
    allcap (value) {
      return value.toUpperCase()
    },
    genderLabel (value) {
      return value === 'M'
        ? '<span class="ui teal label"><i class="large man icon"></i>Male</span>'
        : '<span class="ui pink label"><i class="large woman icon"></i>Female</span>'
    },
    formatNumber (value) {
        // return accounting.formatNumber(value, 2)
        return value;
    },
    formatDate (value, fmt = 'D MMM YYYY') {
      // return (value == null)
      //   ? ''
      //   : moment(value, 'YYYY-MM-DD').format(fmt)
      return value;
    },
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
