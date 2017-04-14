require 'byebug'
class Array

  def my_each(&prc)
    i = 0
    while i < self.length
      prc.call(self[i])
      i += 1
    end
  end

  def my_select(&prc)
    output = []
    self.my_each {|el| output << el if prc.call(el)}
    output
  end

  def my_reject(&prc)
    output = []
    self.my_each {|el| output << el unless prc.call(el)}
    output
  end

  def my_any?(&prc)
    self.my_each {|el| return true if prc.call(el)}
    false
  end

  def my_all?(&prc)
    self.my_each {|el| return false unless prc.call(el)}
    true
  end


  def my_flatten
    output = []

    self.my_each do |el|
      if el.is_a?(Integer)
        output << el
      else
        output << el.my_flatten
      end
    end
    output
  end

  def my_zip(*args)
    length = self.length
    arr = Array.new(length){Array.new(*args.length+1)}
    i = 0
    j = 0
    self.my_each do |el|
      arr[i][j] = el
      i += 1
    end
    arr
    i = 0
    j = 1
    args.my_each do |el|
      el.my_each do |num|
        byebug
        arr[i][j] = num
        i += 1
      end
      i = 0
      j += 1
    end
    arr
  end

  def my_rotate(arg = 1)
    if arg > 0
      i = 0
      while i < arg
        arr = self.push(self[0])
        arr.shift
        i += 1
      end
    else
      i = arg
      while i < 0
        arr = self.unshift(self[-1])
        arr.pop
        i += 1
      end
    end
    arr

  end

  def my_join(arg = "")
    str = ""
    self.my_each do |el|
      str << el + arg
    end
    return str[0..-2] if arg != ""
    str

  end

  def my_reverse
    arr = []
    self.my_each do |el|
      arr.unshift(el)
    end
    arr
  end

  def bubble_sort!

    i = 0
    until i == self.length - 1
      if self[i] > self[i+1]
        sorted = false
        self[i], self[i+1] = self[i+1], self[i]
        # byebug
      else
        sorted = true
      end
      i += 1
    end
    return self if sorted == true
    self.bubble_sort!
  end

end  # ends Class
