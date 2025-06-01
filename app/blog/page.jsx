import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

export const metadata = {
  title: 'Blog | Paramount Energy Group',
  description: 'Read the latest news, tips, and insights about electrical services and energy efficiency.',
}

const blogPosts = [
  {
    id: 1,
    title: "How to Improve Energy Efficiency in Your Home",
    excerpt: "Learn about simple changes that can significantly reduce your energy consumption and save on utility bills.",
    category: "Energy Efficiency",
    date: "April 18, 2025",
    readTime: "5 min read",
    author: "Jennifer Martinez",
    imageUrl: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "The Benefits of Upgrading to LED Lighting",
    excerpt: "Discover why LED lighting is not just better for the environment but also for your wallet in the long run.",
    category: "Lighting",
    date: "April 12, 2025",
    readTime: "4 min read",
    author: "Michael Chang",
    imageUrl: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Electrical Safety Tips for Homeowners",
    excerpt: "Important safety practices every homeowner should know to prevent electrical hazards and keep their family safe.",
    category: "Safety",
    date: "April 5, 2025",
    readTime: "6 min read",
    author: "Robert Paramount",
    imageUrl: "https://images.pexels.com/photos/257886/pexels-photo-257886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Understanding Smart Home Technology",
    excerpt: "A comprehensive guide to smart home technology and how it can transform your living experience.",
    category: "Smart Home",
    date: "March 28, 2025",
    readTime: "7 min read",
    author: "Sarah Johnson",
    imageUrl: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "Commercial Electrical Maintenance Checklist",
    excerpt: "Essential maintenance tasks to keep your commercial electrical systems running safely and efficiently.",
    category: "Commercial",
    date: "March 21, 2025",
    readTime: "5 min read",
    author: "Jennifer Martinez",
    imageUrl: "https://images.pexels.com/photos/8961251/pexels-photo-8961251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    title: "The Future of Renewable Energy in Urban Environments",
    excerpt: "How cities are adapting to incorporate renewable energy solutions in building design and infrastructure.",
    category: "Renewable Energy",
    date: "March 14, 2025",
    readTime: "8 min read",
    author: "Michael Chang",
    imageUrl: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
]

const categories = [
  "All Categories",
  "Energy Efficiency",
  "Lighting",
  "Safety",
  "Smart Home",
  "Commercial",
  "Industrial",
  "Renewable Energy"
]

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights in the electrical industry.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <Button 
                        key={index} 
                        variant={index === 0 ? "default" : "outline"}
                        className="w-full justify-start"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-muted-foreground mb-4">
                    Get the latest electrical tips and industry news delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button className="w-full">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">
                        <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-sm flex flex-wrap gap-x-4 gap-y-1 mt-2">
                        <span className="inline-flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="inline-flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </span>
                        <span className="inline-flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline">
                        <Link href={`/blog/${post.id}`}>
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <Button variant="outline" className="mr-2">Previous</Button>
                <Button>Next</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}