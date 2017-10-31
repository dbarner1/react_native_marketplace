<ScrollView showsVerticalScrollIndicator={false} style={styles.AisleScroll} >
  {
    this.state.products.map(function(product) {
       return(
         <View style={styles.product} key={product}>
           <Text>
             {product[0]}
           </Text>
           <Image
             style={{width: 80, height: 80}}
             source={require('../images/candy.jpg')}
           />
           <Text>
          ${product[1]}
           </Text>
           <TouchableOpacity onPress={() => console.log("ih")}>
          <Text>Add to Cart</Text>
           </TouchableOpacity>
         </View>
      )
    })
  }
</ScrollView>
