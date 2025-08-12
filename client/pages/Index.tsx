import { Search, Menu, Bell, User, TrendingUp, Eye, Users, DollarSign, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Index() {
  return (
    <div className="min-h-screen bg-navy-900 text-white">
      {/* Header */}
      <header className="border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold">Global <span className="text-cyan-400">ADVERTISING</span> EXCHANGE</h1>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-white hover:text-cyan-400">Market</a>
                <a href="#" className="text-white hover:text-cyan-400">Bidding</a>
                <a href="#" className="text-white hover:text-cyan-400">Account</a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for listings, actions, etc."
                  className="pl-10 pr-4 py-2 bg-navy-800 border border-navy-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <Bell className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <User className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Menu className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer md:hidden" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Global<br />
                <span className="text-cyan-400">ADVERTISING</span><br />
                EXCHANGE
              </h2>
              <Button className="bg-cyan-400 hover:bg-cyan-500 text-navy-900 font-semibold px-8 py-3 text-lg">
                Discover more
              </Button>
            </div>
            
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-white">31m</div>
                  <div className="text-gray-400">All active</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white">250k</div>
                  <div className="text-gray-400">Bidders</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white">148k</div>
                  <div className="text-gray-400">Auctions daily</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white">500k</div>
                  <div className="text-gray-400">Users active daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Auctions */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">HOT <span className="text-cyan-400">AUCTIONS</span></h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="border-navy-700 text-white hover:bg-navy-800">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-navy-700 text-white hover:bg-navy-800">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-navy-800 border-navy-700">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">NY,<br />Times Square<br />Giga LED</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center"><Eye className="h-4 w-4 mr-1" /> 1,247 views</span>
                      <span className="flex items-center"><Users className="h-4 w-4 mr-1" /> 89 bidders</span>
                    </div>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1564424188345-e14ca3e4b8b3?w=300&h=200&fit=crop" 
                    alt="Times Square LED Display"
                    className="w-48 h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    Latest bid: <span className="text-white font-semibold">$2,450</span>
                  </div>
                  <Button className="bg-cyan-400 hover:bg-cyan-500 text-navy-900 px-6">
                    Active bidding history
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-navy-800 border-navy-700">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-white mb-4">Best Performing Today ⚡</h4>
                <div className="space-y-3">
                  {[
                    { name: "Alice Robbins", bid: "$1,827", avatar: "AR" },
                    { name: "Mark Garcia", bid: "$1,748", avatar: "MG" },
                    { name: "James Ray", bid: "$1,692", avatar: "JR" },
                    { name: "Lisa Brown", bid: "$1,654", avatar: "LB" },
                    { name: "Mike Wilson", bid: "$1,589", avatar: "MW" },
                  ].map((user, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-navy-900 font-semibold text-sm">
                          {user.avatar}
                        </div>
                        <span className="text-white">{user.name}</span>
                      </div>
                      <span className="text-white font-semibold">{user.bid}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Inspect Market */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8">Inspect Market</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "NY Times Square", price: "$2,450", location: "New York, USA", image: "https://images.unsplash.com/photo-1564424188345-e14ca3e4b8b3?w=300&h=200&fit=crop" },
              { title: "Tokyo Digital", price: "$1,890", location: "Tokyo, Japan", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&h=200&fit=crop" },
              { title: "London Bridge", price: "$1,650", location: "London, UK", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=300&h=200&fit=crop" },
              { title: "Berlin Mall", price: "$1,200", location: "Berlin, Germany", image: "https://images.unsplash.com/photo-1546726747-421c6d69c929?w=300&h=200&fit=crop" },
            ].map((item, index) => (
              <Card key={index} className="bg-navy-800 border-navy-700 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                <CardContent className="p-4">
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm mb-2">{item.location}</p>
                  <p className="text-cyan-400 font-bold">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real-Time Traffic */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8">
            REAL-TIME <span className="text-cyan-400">TRAFFIC INSIDE</span>
          </h3>
          <Card className="bg-navy-800 border-navy-700">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-navy-700">
                      <th className="text-left py-3 text-gray-400 font-medium">Listing</th>
                      <th className="text-left py-3 text-gray-400 font-medium">Tracking Activity</th>
                      <th className="text-left py-3 text-gray-400 font-medium">Views</th>
                      <th className="text-left py-3 text-gray-400 font-medium">CTR</th>
                      <th className="text-left py-3 text-gray-400 font-medium">Leads</th>
                      <th className="text-left py-3 text-gray-400 font-medium">Cost</th>
                      <th className="text-left py-3 text-gray-400 font-medium">Favorites</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "California Highways", status: "Online", views: "2,142,195", ctr: "4.2%", leads: "1.8%", cost: "$1,847", favorites: "458" },
                      { name: "New York Boards", status: "Online", views: "1,847,293", ctr: "3.8%", leads: "2.1%", cost: "$1,654", favorites: "392" },
                      { name: "Florida Shopping", status: "Online", views: "1,654,831", ctr: "5.1%", leads: "1.9%", cost: "$1,523", favorites: "367" },
                      { name: "Texas Roadside", status: "Online", views: "1,523,447", ctr: "4.7%", leads: "2.3%", cost: "$1,398", favorites: "341" },
                      { name: "Chicago Transit", status: "Online", views: "1,398,256", ctr: "3.9%", leads: "1.7%", cost: "$1,287", favorites: "318" },
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-navy-700">
                        <td className="py-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                            <span className="text-white">{row.name}</span>
                          </div>
                        </td>
                        <td className="py-4 text-lime-400">{row.status}</td>
                        <td className="py-4 text-white">{row.views}</td>
                        <td className="py-4 text-white">{row.ctr}</td>
                        <td className="py-4 text-white">{row.leads}</td>
                        <td className="py-4 text-white">{row.cost}</td>
                        <td className="py-4 text-white">{row.favorites}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8">
            HOW IT WORKS FOR <span className="text-cyan-400">ADVERTISERS</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <TrendingUp className="h-12 w-12 text-cyan-400" />,
                title: "Upload your advertising portfolio",
                description: "Create a profile on our advertising marketplace. List your advertising space inventory for global brands."
              },
              {
                icon: <Eye className="h-12 w-12 text-cyan-400" />,
                title: "Fill out ads, receive spot biding",
                description: "Set your pricing and requirements. Receive real-time bids from advertisers worldwide for your available spots."
              },
              {
                icon: <DollarSign className="h-12 w-12 text-cyan-400" />,
                title: "Auctions and forward pricing",
                description: "Participate in live auctions or set forward pricing for future campaigns. Maximize your revenue potential."
              }
            ].map((step, index) => (
              <Card key={index} className="bg-navy-800 border-navy-700 text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <h4 className="text-white font-semibold mb-4">{step.title}</h4>
                  <p className="text-gray-400">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Update */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8">
            TODAY'S <span className="text-cyan-400">UPDATE</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Tesla Roadster auction nets $94M", time: "2 hours ago", category: "Auctions" },
              { title: "NY Times Square reaches 2.4M monthly views", time: "4 hours ago", category: "Analytics" },
              { title: "The truth about display advertising ROI", time: "6 hours ago", category: "Insights" },
              { title: "Blockchain pricing updates in real-time", time: "8 hours ago", category: "Technology" },
            ].map((news, index) => (
              <Card key={index} className="bg-navy-800 border-navy-700">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-cyan-400 text-navy-900 px-2 py-1 rounded text-xs font-semibold">
                      {news.category}
                    </span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">{news.title}</h4>
                  <p className="text-gray-400 text-sm">{news.time}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-400 to-blue-500">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Easy ad space trading worldwide
          </h2>
          <Button className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-3 text-lg">
            Get Started
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 border-t border-navy-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">The New Creative Economy</h4>
              <p className="text-gray-400 text-sm">Empowering advertisers and space owners with transparent, efficient marketplace solutions.</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Market</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Browse Spaces</a></li>
                <li><a href="#" className="hover:text-white">Active Auctions</a></li>
                <li><a href="#" className="hover:text-white">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Resources</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">API Docs</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-navy-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Global Advertising Exchange. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
