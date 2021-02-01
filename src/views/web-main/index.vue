<template>
  <el-main>
    <el-row>
      <el-col :span="18">
        <el-row type="flex" justify="start">
          <el-dropdown type="primary" trigger="click" @command="handleClick">
            <el-button type="primary">
              <span class="req-type">{{ reqType }}</span>
              <i class="el-icon-arrow-down el-icon--right" />
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="GET">GET</el-dropdown-item>
              <el-dropdown-item command="POST">POST</el-dropdown-item>
              <el-dropdown-item command="PUT">PUT</el-dropdown-item>
              <el-dropdown-item command="DELETE">DELETE</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-input v-model="url" placeholder="请求地址" />
          <el-button type="primary" @click="send">send</el-button>
        </el-row>
      </el-col>
      <el-col :span="18">
        <h2>Request</h2>
        <el-tabs type="card">
          <el-tab-pane label="Body">
            <keep-alive>
              <code-editor
                v-model="reqBody"
                theme="vs-dark"
                language="json"
                :options="{ readOnly: false, wordWrap: 'on' }"
                :height="240"
              />
            </keep-alive>
          </el-tab-pane>
          <el-tab-pane label="Header">
            <keep-alive>
              <code-editor
                ref="reqHeader"
                v-model="reqHeader"
                theme="vs-dark"
                language="json"
                :options="{ readOnly: false, wordWrap: 'on' }"
                :height="240"
              />
            </keep-alive>
          </el-tab-pane>
          <el-tab-pane disabled>
            <el-dropdown slot="label" trigger="click" @click.stop="" @command="handelContentType">
              <span class="el-dropdown-link">
                Content-Type<i class="el-icon-arrow-down el-icon--right" />
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="application/xml">application/xml</el-dropdown-item>
                <el-dropdown-item command="application/json">application/json</el-dropdown-item>
                <el-dropdown-item command="multipart/form-data">multipart/form-data</el-dropdown-item>
                <el-dropdown-item command="application/x-www-form-urlencoded">application/x-www-form-urlencoded</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-tab-pane>
        </el-tabs>
        <h2>Response</h2>
        <el-tabs type="card">
          <el-tab-pane label="Body">
            <code-editor
              ref="resBody"
              v-model="resBody"
              theme="vs-dark"
              language="json"
              :options="{ readOnly: false, wordWrap: 'on' }"
              :height="240"
            />
          </el-tab-pane>
          <el-tab-pane label="Header">
            <code-editor
              ref="resHeader"
              v-model="resHeader"
              theme="vs-dark"
              language="json"
              :options="{ readOnly: false, wordWrap: 'on' }"
              :height="240"
            />
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>

  </el-main>
</template>

<script>
import axios from 'axios'
export default {
  name: 'web-main',
  components: {},
  props: {},
  data() {
    return {
      reqType: 'GET',
      url: '',
      contentType: 'Content-Type: application/x-www-form-urlencoded',
      reqBody: JSON.stringify({}, null, '\t'),
      reqHeader: JSON.stringify({
        'Content-Type': 'Content-Type: application/x-www-form-urlencoded'
      }, null, '\t'),
      resHeader: '',
      resBody: ''
    }
  },
  computed: {
    ct() {
      debugger
      return this.contentType
    }
  },
  watch: {
    contentType(val, oldval) {
      // this.reqHeader = this.reqHeader.replace(oldval, val)
      this.$refs.reqHeader.setValue(this.reqHeader.replace(oldval, val))
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    handleClick(val) {
      this.reqType = val
    },
    handelContentType(val) {
      this.contentType = val
    },
    send() {
      const instance = axios.create({
        baseURL: '',
        timeout: 100000,
        headers: JSON.parse(this.reqHeader)
      })
      instance.request({
        url: this.url,
        method: this.reqType,
        params: JSON.parse(this.reqBody),
        data: JSON.parse(this.reqBody)
      }).then(res => {
        console.log(res)
        this.$refs.resHeader.setValue(JSON.stringify(res.headers, null, '\t'))
        this.$refs.resBody.setValue(JSON.stringify(res.data, null, '\t'))
      }).catch(err => {
        alert(err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .req-type {
    display: inline-block;
    width: 50px;
    text-align: center;
  }
  h2 {
    margin: 10px 0 10px 0;
  }
  /deep/ .el-tabs__header{
    margin-bottom: 0;
  }
</style>
