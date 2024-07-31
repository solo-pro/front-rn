
import { StyleSheet, View, Text, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductCard from '@/components/product/ProductCard'
import { mCategories, mProducts } from '@/data/product'
import { Category, Product } from '@/types/product'
import CategoryCard from '@/components/product/CategoryCard'

export default function HomeScreen({ navigation }: { navigation: any }) {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const loadProducts = async () => {
      // const fetchedProducts = await fetchProducts();
      const fetchedProducts = mProducts
      const fetchedCategories = mCategories
      setProducts(fetchedProducts)
      setCategories(fetchedCategories)
    }

    loadProducts()
  }, [])

  const renderProduct = ({ item }: { item: Product }) => <ProductCard product={item} onPress={() => navigation.navigate('ProductDetail', { productId: item.id })} />

  const renderCategory = ({ item }: { item: Category }) => <CategoryCard category={item} onPress={() => navigation.navigate('Category', { categoryId: item.id })} />


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>추천 상품</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      />
      <FlatList data={products} columnWrapperStyle={styles.row} renderItem={renderProduct} keyExtractor={(item) => item.id.toString()} numColumns={2} contentContainerStyle={styles.productList} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  productList: {
    paddingBottom: 10,
  },
  categoryList: {
    paddingBottom: 10,
    // gap: 10,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
})
