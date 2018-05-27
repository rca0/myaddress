export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      items: [
        { icon: 'apps', title: 'Página Inicial', to: '/' },
        { icon: 'list', title: 'Endereços', to: '/address' }
      ],
      title: 'myAddress'
    }
  }
}