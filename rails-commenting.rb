# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Using "<" means that the blogpostcontroller is a child of the ApplicationController. This means that the blogpostcontroller inherits all the methods and attributes of the ApplicationController.
class BlogPostsController < ApplicationController
  def index
    # ---2) @posts is an array of all the blog posts in the database. Using @ means that this is an instance variable. Using .all means that it is a class method.
    @posts = BlogPost.all
  end

  # ---3) def show is a CRUD method. It is a GET method that displays the blog post.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) def new is also a CRUD method. It is a GET method that displays the form for creating a new blog post.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) @post is an instance variable. It is a new blog post. Using .create means that it is a class method. It creates a new blog post in the database.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) as above @post is an instance variable but this time using the .find method it finds the blog post in the database. Also with params[:id] it means that the id of the blog post is being passed in.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) It is the blog post that is being updated. Using .update_attributes means that it is a class method. It updates the blog post in the database.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) redirect_to is a method that redirects to a different page. blog_posts_path is a method that returns the path to the blog posts page.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) private is a method that is used to define methods that are only accessible within the class. it is to make sure that no one else can access the methods
  private
  def blog_post_params
    # ---10) params.require is a method that is used to require that a certain parameter is passed in. It is to make sure that the user is passing in the correct parameters. .permit is to make sure that certain parameters are passed in.
    params.require(:blog_post).permit(:title, :content)
  end
end
